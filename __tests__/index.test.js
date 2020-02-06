
const devText = require('../index');

describe('Testing DevText lib', () => {
    test('decodes a \\t\\n stacktrace', () => {
        expect(devText('Exception in thread "main" java.lang.NullPointerException\\n\\tat com.example.myproject.Book.getTitle(Book.java:16)\\n\\tat com.example.myproject.Author.getBookTitles(Author.java:25)\\n\\tat com.example.myproject.Bootstrap.main(Bootstrap.java:14)')).toEqual('Exception in thread "main" java.lang.NullPointerException\n' +
            '\tat com.example.myproject.Book.getTitle(Book.java:16)\n' +
            '\tat com.example.myproject.Author.getBookTitles(Author.java:25)\n' +
            '\tat com.example.myproject.Bootstrap.main(Bootstrap.java:14)');
    });

    test('decodes a \\t\\n stacktrace, divided into args', () => {
        expect(devText('Exception in thread "main" java.lang.NullPointerException\\n\\tat','com.example.myproject.Book.getTitle(Book.java:16)\\n\\tat','com.example.myproject.Author.getBookTitles(Author.java:25)\\n\\tat','com.example.myproject.Bootstrap.main(Bootstrap.java:14)')).toEqual('Exception in thread "main" java.lang.NullPointerException\n' +
            '\tat com.example.myproject.Book.getTitle(Book.java:16)\n' +
            '\tat com.example.myproject.Author.getBookTitles(Author.java:25)\n' +
            '\tat com.example.myproject.Bootstrap.main(Bootstrap.java:14)');
    });

    test('decodes a JSON', () => {
       expect(devText('{"menu":{"id":"file","value":"File","popup":{"menuitem":[{"value":"New","onclick":"CreateNewDoc()"},{"value":"Open","onclick":"OpenDoc()"},{"value":"Close","onclick":"CloseDoc()"}]}}}')).toEqual('{\n' +
           '  "menu": {\n' +
           '    "id": "file",\n' +
           '    "value": "File",\n' +
           '    "popup": {\n' +
           '      "menuitem": [\n' +
           '        {\n' +
           '          "value": "New",\n' +
           '          "onclick": "CreateNewDoc()"\n' +
           '        },\n' +
           '        {\n' +
           '          "value": "Open",\n' +
           '          "onclick": "OpenDoc()"\n' +
           '        },\n' +
           '        {\n' +
           '          "value": "Close",\n' +
           '          "onclick": "CloseDoc()"\n' +
           '        }\n' +
           '      ]\n' +
           '    }\n' +
           '  }\n' +
           '}')
    });

    test('decodes a JSON with escaped \\n', () => {
        expect(devText('{"menu":{"id":"file","value":"File","popup":{"menuitem":[{"value":"New","onclick":"CreateNewDoc()"},{"value":"Open","onclick":"OpenDoc();\\\\nOpenDoc2();\\\\nOpenDoc3();"},{"value":"Close","onclick":"CloseDoc()"}]}}}')).toEqual('{\n' +
            '  "menu": {\n' +
            '    "id": "file",\n' +
            '    "value": "File",\n' +
            '    "popup": {\n' +
            '      "menuitem": [\n' +
            '        {\n' +
            '          "value": "New",\n' +
            '          "onclick": "CreateNewDoc()"\n' +
            '        },\n' +
            '        {\n' +
            '          "value": "Open",\n' +
            '          "onclick": "OpenDoc();\n' +
            'OpenDoc2();\n' +
            'OpenDoc3();"\n' +
            '        },\n' +
            '        {\n' +
            '          "value": "Close",\n' +
            '          "onclick": "CloseDoc()"\n' +
            '        }\n' +
            '      ]\n' +
            '    }\n' +
            '  }\n' +
            '}')
    });

    test('decodes a URL encoded string', () => {
        expect(devText('https://home.org/test.asp?name=st%C3%A5le&car=saab')).toEqual('https://home.org/test.asp?name=ståle&car=saab')
    });

    test('decodes quotation marks', () => {
        expect(devText('{\\"menu\\":{\\"id\\":\\"file\\",\\"value\\":\\"File\\"}}')).toEqual('{"menu":{"id":"file","value":"File"}}')
    });
});



