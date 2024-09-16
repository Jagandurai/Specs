const formatter = new Intl.NumberFormat('India', {
  style: 'currency',
  currency: 'INR',
});

const formatPrice = (number) => formatter.format(number);

export default formatPrice;
