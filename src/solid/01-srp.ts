(() => {

    interface Product {
        id: number;
        name: string;
    }

    class ProductService {
        getProduct(id: number) {
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
            console.log('Guardando en base de datos', product);
        }
    }

    class Mailer {
        private masterEmail: string = 'jorney@google.com';

        sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes', template);
        }
    }

    class CartBloc {
        private itemsInCart: Object[] = [];

        addCart(productId: number) {
            console.log('Agregando al carrito', productId);
        }
    }


    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;
        private cartBloc: CartBloc;

        constructor(productService: ProductService, mailer: Mailer, cartBloc: CartBloc) {
            this.productService = productService;
            this.mailer = mailer;
            this.cartBloc = cartBloc;
        }

        loadProduct(id: number) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct(id);
        }

        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct(product);
        }

        notifyClients() {
            this.mailer.sendEmail(['jorney@facebook.com'], 'to-admins');
        }

        onAddToCart(productId: number) {
            // Agregar al carrito de compras
            this.cartBloc.addCart(productId);
        }

    }

    const productService = new ProductService();
    const mailer = new Mailer();
    const cartBloc = new CartBloc();

    const productBloc = new ProductBloc(productService, mailer, cartBloc);

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    productBloc.onAddToCart(10);


})();