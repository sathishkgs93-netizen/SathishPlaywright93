import { test, expect } from '@playwright/test'


test.describe('API test', () => {
    test('API', async ({ request }) => {
        const response = await request.get('https://dummyjson.com/products/1');
        expect(response.status()).toBe(200);
        const body = await response.json();
        console.log(body.category);
        console.log('category: ${body.category}');
        //expect(body.category()).toBe('beauty');
        expect(body.id).toBe(1);

    });

});

test.describe('API tests', () => {
    test('GET API tests', async ({ request }) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts/3');
        expect(response.status()).toBe(200);

        const body = await response.json();
        console.log(body);
        console.log('Title: ${body.title}');
        expect(body.id).toBe(3);

    });
});

test('Post', async ({ request }) => {
    const payload = {
        name: "Apple MacBook Pro 16",
        data: {
            year: 2019,
            price: 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    };

    const resposne = await request.post('https://api.restful-api.dev/objects', { data: payload });
    expect(resposne.status()).toBe(200);
    const resposnebody = await resposne.json();
    console.log(resposnebody);
    console.log('createdAt: ${ responseBody.id }');

    expect(resposnebody.name).toBe('Apple MacBook Pro 16');
    expect(resposnebody.data.year).toBe(2019);

});


