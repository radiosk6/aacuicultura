const { db } = require('./src/firebase');
const { collection, doc, setDoc, serverTimestamp, Timestamp } = require("firebase/firestore");

// Crear un nuevo usuario en la colección acuiUsers
async function createAcuiUser() {
  const userRef = doc(collection(db, 'acuiUsers')); // Genera un ID automático
  await setDoc(userRef, {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "buyer",
    profile_picture_url: "https://example.com/profile_picture.jpg",
    address: {
      street: "123 Main St",
      city: "Santiago Atitlán",
      state: "Sololá",
      country: "Guatemala",
      postal_code: "07019"
    },
    phone_number: "+50212345678",
    ratings: [
      {
        rating: 5,
        review: "Great seller!",
        reviewer_id: "otherUserId123"
      }
    ],
    purchase_history: ["orderId123", "orderId456"],
    sales_history: ["orderId789"],
    joined_at: serverTimestamp()
  });
  console.log(`Usuario creado con ID: ${userRef.id}`);
}

// Crear un nuevo producto en la colección acuiProducts
async function createAcuiProduct() {
  const productRef = doc(collection(db, 'acuiProducts')); // Genera un ID automático
  await setDoc(productRef, {
    seller_id: "userId123",
    name: "Tilapia Fillet",
    description: "Fresh tilapia fillet, perfect for grilling.",
    price: 25.99,
    category: "pescado",
    stock: 100,
    images: [
      "https://example.com/product_image1.jpg",
      "https://example.com/product_image2.jpg"
    ],
    ratings: [
      {
        rating: 4,
        review: "Good quality, but delivery was slow.",
        reviewer_id: "buyerUserId123"
      }
    ],
    created_at: serverTimestamp()
  });
  console.log(`Producto creado con ID: ${productRef.id}`);
}

// Crear un nuevo pedido en la colección acuiOrders
async function createAcuiOrder() {
  const orderRef = doc(collection(db, 'acuiOrders')); // Genera un ID automático
  await setDoc(orderRef, {
    buyer_id: "buyerUserId123",
    seller_id: "sellerUserId456",
    product_id: "productId789",
    quantity: 2,
    total_price: 51.98,
    shipping_info: {
      address: {
        street: "123 Main St",
        city: "Santiago Atitlán",
        state: "Sololá",
        country: "Guatemala",
        postal_code: "07019"
      },
      method: "standard"
    },
    status: "processing",
    created_at: serverTimestamp(),
    updated_at: serverTimestamp()
  });
  console.log(`Pedido creado con ID: ${orderRef.id}`);
}

// Crear un nuevo mensaje en la colección acuiMessages
async function createAcuiMessage() {
  const messageRef = doc(collection(db, 'acuiMessages')); // Genera un ID automático
  
  // Obtener el timestamp actual
  const timestampNow = Timestamp.now();

  await setDoc(messageRef, {
    participants: ["userId123", "userId456"],
    messages: [
      {
        sender_id: "userId123",
        text: "Hello, I'm interested in your product.",
        timestamp: timestampNow // Usa el timestamp actual
      },
      {
        sender_id: "userId456",
        text: "Sure, let me know if you have any questions.",
        timestamp: timestampNow // Usa el timestamp actual
      }
    ],
    last_message: {
      text: "Sure, let me know if you have any questions.",
      sender_id: "userId456",
      timestamp: timestampNow // Usa el timestamp actual
    },
    created_at: serverTimestamp(),
    updated_at: serverTimestamp()
  });
  console.log(`Mensaje creado con ID: ${messageRef.id}`);
}

// Crear una nueva transacción en la colección acuiTransactions
async function createAcuiTransaction() {
  const transactionRef = doc(collection(db, 'acuiTransactions')); // Genera un ID automático
  await setDoc(transactionRef, {
    order_id: "orderId123",
    buyer_id: "buyerUserId123",
    seller_id: "sellerUserId456",
    amount: 51.98,
    status: "completed",
    payment_method: "credit_card",
    created_at: serverTimestamp()
  });
  console.log(`Transacción creada con ID: ${transactionRef.id}`);
}

// Ejecutar las funciones
async function main() {
  await createAcuiUser();
  await createAcuiProduct();
  await createAcuiOrder();
  await createAcuiMessage();
  await createAcuiTransaction(); // Asegúrate de llamar a la función aquí
}

main().catch(console.error);
