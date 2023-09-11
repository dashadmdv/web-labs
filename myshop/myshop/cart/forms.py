from django import forms

round_times = [(str(i) + ':00', str(i) + ':00') for i in range(10, 19)]
half_times = [(str(i) + ':30', str(i) + ':30') for i in range(10, 19)]
APPT_TIME_CHOICES = []
for i in range(9):
    APPT_TIME_CHOICES.append(round_times[i])
    APPT_TIME_CHOICES.append(half_times[i])


class CartAddProductForm(forms.Form):
    time = forms.TypedChoiceField(choices=APPT_TIME_CHOICES, coerce=str)
    update = forms.BooleanField(required=False, initial=False, widget=forms.HiddenInput)
