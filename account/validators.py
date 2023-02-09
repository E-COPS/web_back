from django.core.exceptions import ValidationError
import re

#5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능
def id_validator(value):
    len_val=len(value)>=5 and len(value)<=20
    punct_val=True
    punct=re.compile("a-zA-Z0-9_-") #a-zA-Z0-9_- 제외한 기호들
    for c in value:
        if punct.match(c) is None:
            punct_val=False
            break
    if not len_val or not punct_val:
        raise ValidationError("5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.")

