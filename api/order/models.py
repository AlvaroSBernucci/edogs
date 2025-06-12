from django.db import models
from django.conf import settings
from address.models import Address
from dogs.models import Dog
from account.models import Account

class Order(models.Model):
    STATUS_CHOICES = [
        ('PENDING',   'Pendente'),      # pedido criado, aguardando confirmação
        ('CONFIRMED', 'Confirmado'),    # confirmado (pagamento aprovado)
        ('PROCESSING','Em Processamento'),  # embalando/separando itens
        ('SHIPPED',   'Enviado'),       # saiu para entrega
        ('DELIVERED', 'Entregue'),      # entregue ao cliente
        ('CANCELLED', 'Cancelado'),     # cancelado antes do envio
        ('RETURNED',  'Devolvido'),     # devolução / retorno finalizado
    ]
    user_seller = models.ForeignKey(Account,on_delete=models.PROTECT,related_name="order_seller")
    user_buyer = models.ForeignKey(Account, on_delete=models.PROTECT, related_name="order_buyer")
    address = models.ForeignKey(Address,on_delete=models.PROTECT, related_name="orders")
    total_amount = models.DecimalField("Valor total", max_digits=9, decimal_places=2)
    status = models.CharField("Status", max_length=10,choices=STATUS_CHOICES,default="PENDING")
    created_at = models.DateTimeField("Criado em", auto_now_add=True)
    updated_at = models.DateTimeField("Atualizado em", auto_now=True)


class OrderItem(models.Model):
    order = models.ForeignKey(Order,on_delete=models.PROTECT,related_name="items")
    dog  = models.ForeignKey(Dog,on_delete=models.PROTECT)
    price_at_purchase = models.DecimalField("Preço da compra", max_digits=9,decimal_places=2)
    quantity = models.PositiveIntegerField("Quantidade", default=1)
