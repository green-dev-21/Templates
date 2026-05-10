export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export interface Customer {
  name: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}

export interface Order {
  orderId?: string;
  items: CartItem[];
  total: number;
  customer: Customer;
  paymentMethod: string;
}

export function buildWhatsAppMessage(order: Order): string {
  const itemLines = order.items.map(item =>
    `• ${item.name} x ${item.quantity} - ₹${item.price * item.quantity}`
  ).join('\n');

  const message = `*New Order Received!* 🚀\n\n` +
    (order.orderId ? `*Order ID: ${order.orderId}*\n\n` : '') +
    `*Items:*\n${itemLines}\n\n` +
    `*Total: ₹${order.total}*\n\n` +
    `*Customer Details:*\n` +
    `Name: ${order.customer.name}\n` +
    `Phone: ${order.customer.phone}\n` +
    `Address: ${order.customer.address}, ${order.customer.city} - ${order.customer.pincode}\n\n` +
    `*Payment Method:* ${order.paymentMethod}\n\n` +
    `Please confirm the order. Thank you!`;

  return encodeURIComponent(message);
}

export function redirectToWhatsApp(phone: string, message: string): void {
  const cleanPhone = phone.replace(/\D/g, '');
  const url = `https://wa.me/${cleanPhone}?text=${message}`;
  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }
}
