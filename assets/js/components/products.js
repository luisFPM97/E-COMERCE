function products(products) {
  const db = [...products]

  function printProducts() {
    const productsDOM = document.querySelector('.products__container')
    let htmlProduct = ''

    for (const product of db) {
      htmlProduct += `
      <article class="product">
        <div class="product__image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product__content">
          <h3 class="product__title">${product.name}</h3>
          <p class="product__description">${product.description ? (product.description.substring(0, 80) + '...') : 'Producto de calidad'}</p>
          <div class="product__info">
            <span class="product__price">$${product.price}</span>
            <span class="product__stock">Stock: ${product.quantity}</span>
          </div>
          <div class="product__actions">
            <button type="button" class="product__btn product__btn--details" data-id="${product.id}">
              <i class='bx bx-show'></i>
              <span>Ver detalles</span>
            </button>
            <button type="button" class="product__btn product__btn--cart add--to--cart" data-id="${product.id}">
              <i class='bx bx-cart-add'></i>
            </button>
          </div>
        </div>
      </article>
      `
    }

    productsDOM.innerHTML = htmlProduct
    addModalListeners()
  }

  function addModalListeners() {
    const detailButtons = document.querySelectorAll('.product__btn--details')
    const modal = document.getElementById('productModal')
    const modalClose = document.querySelector('.modal__close')
    const modalOverlay = document.querySelector('.modal__overlay')

    detailButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const productId = parseInt(e.currentTarget.dataset.id)
        openModal(productId)
      })
    })

    modalClose.addEventListener('click', closeModal)
    modalOverlay.addEventListener('click', closeModal)

    // Cerrar modal con ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('modal--show')) {
        closeModal()
      }
    })
  }

  function openModal(productId) {
    const product = db.find(p => p.id === productId)
    if (!product) return

    const modal = document.getElementById('productModal')
    const modalImage = document.getElementById('modalImage')
    const modalTitle = document.getElementById('modalTitle')
    const modalPrice = document.getElementById('modalPrice')
    const modalStock = document.getElementById('modalStock')
    const modalDescription = document.getElementById('modalDescription')
    const modalAddToCart = document.getElementById('modalAddToCart')

    modalImage.src = product.image
    modalImage.alt = product.name
    modalTitle.textContent = product.name
    modalPrice.textContent = `$${product.price}`
    modalStock.textContent = `Disponibles: ${product.quantity} unidades`
    modalDescription.textContent = product.description || 'Producto de excelente calidad'

    // Agregar listener al botón de agregar al carrito del modal
    modalAddToCart.onclick = () => {
      modalAddToCart.dataset.id = product.id
      const event = new Event('click', { bubbles: true })
      modalAddToCart.dispatchEvent(event)
      closeModal()
    }

    modal.classList.add('modal--show')
    document.body.style.overflow = 'hidden'
  }

  function closeModal() {
    const modal = document.getElementById('productModal')
    modal.classList.remove('modal--show')
    document.body.style.overflow = ''
  }

  printProducts()

  return {
    db,
    printProducts
  }
}

export default products