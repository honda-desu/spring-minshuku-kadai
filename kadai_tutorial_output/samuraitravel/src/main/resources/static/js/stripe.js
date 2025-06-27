const stripe = Stripe('pk_test_51RXvBtQmtPbveB8Iwue73pW5HzP85ELU2PO8B89D9eWWCQWqKYeZFvBCYIveuFq45Hk7jF4Tc4cAUw61Au46KaqU00c8pWtfMu');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});