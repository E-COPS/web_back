from django.db import models
from django.core.validators import MinLengthValidator,validate_email

#회원 모델 생성
class account(models.Model):
    #id,pw,name,e-mail
    id=models.CharField(max_length=8,validators=[MinLengthValidator(5)],blank=False,unique=True) #blank=False는 빈값을 허용하지 않겠다는 의미
    pw=models.TextField(max_length=300) #해싱된 값으로 저장
    name=models.CharField(max_length=5,validators=[MinLengthValidator(1)],blank=False)
    email=models.CharField(validators=[validate_email],unique=True)

    def __str__(self):
        return self.id