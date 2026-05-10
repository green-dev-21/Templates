import { buildWhatsAppMessage } from '../src/lib/whatsapp';

describe('buildWhatsAppMessage', () => {
  it('should format a basic order message correctly', () => {
    const order = {
      orderId: 'ORD123',
      items: [
        { name: 'Product 1', quantity: 2, price: 100 },
        { name: 'Product 2', quantity: 1, price: 50 },
      ],
      total: 250,
      customer: {
        name: 'John Doe',
        phone: '1234567890',
        address: '123 Street',
        city: 'City',
        pincode: '123456',
      },
      paymentMethod: 'UPI',
    };

    const message = decodeURIComponent(buildWhatsAppMessage(order));
    expect(message).toContain('*Order ID: ORD123*');
    expect(message).toContain('Product 1 x 2 - ₹200');
    expect(message).toContain('Product 2 x 1 - ₹50');
    expect(message).toContain('*Total: ₹250*');
    expect(message).toContain('John Doe');
  });
});
