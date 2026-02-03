import math
from sympy import symbols, Eq, solve, sympify
from kivy.app import App
from kivy.uix.floatlayout import FloatLayout
from kivy.uix.gridlayout import GridLayout
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button
from kivy.core.window import Window
from kivy.uix.popup import Popup
from kivy.uix.label import Label
from kivy.graphics import Color, Rectangle

# Force Fullscreen
Window.fullscreen = 'auto'

class SciButton(Button):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.background_normal = ''
        self.bold = True
        self.font_size = '20sp'
        self.background_color = (0.1, 0.1, 0.15, 1)

class VenocyberCalc(FloatLayout):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        
        # Branding Header
        self.header = Label(
            text="VENOCYBER PROFESSIONAL",
            pos_hint={"center_x": 0.5, "top": 1},
            size_hint=(1, 0.05),
            color=(0, 0.7, 1, 1),
            bold=True
        )
        self.add_widget(self.header)

        # Large Display
        self.display = TextInput(
            multiline=False, readonly=True, halign="right", font_size='60sp',
            size_hint=(0.95, 0.15), pos_hint={"center_x": 0.5, "top": 0.94},
            background_color=(0, 0, 0, 0.7), foreground_color=(1, 1, 1, 1),
            padding=[20, 20]
        )
        self.add_widget(self.display)

        # Function Toolbar
        self.util_bar = GridLayout(cols=4, size_hint=(0.95, 0.07), 
                                   pos_hint={"center_x": 0.5, "top": 0.78}, spacing=10)
        
        utils = [
            ('UNIT CONV', self.show_converter), 
            ('GRAPH', self.placeholder_msg), 
            ('MATRIX', self.placeholder_msg),
            ('EXIT', exit)
        ]
        for text, func in utils:
            btn = Button(text=text, background_color=(0, 0.4, 0.6, 1), bold=True)
            btn.bind(on_press=func)
            self.util_bar.add_widget(btn)
        self.add_widget(self.util_bar)

        # Main Keypad (5 columns for better scientific layout)
        self.keypad = GridLayout(cols=5, spacing=10, padding=20,
                                 size_hint=(1, 0.7), pos_hint={"x": 0, "y": 0})

        buttons = [
            'sin', 'cos', 'tan', 'log', 'C',
            '7', '8', '9', '/', '«',
            '4', '5', '6', '*', 'sqrt',
            '1', '2', '3', '-', '^',
            '0', '.', 'x', '+', '=',
            '(', ')', 'pi', 'solve', 'conv'
        ]

        for b in buttons:
            btn_color = (0.15, 0.15, 0.2, 1)
            if b == '=': btn_color = (0, 0.6, 0.3, 1)
            if b == 'solve': btn_color = (0.5, 0.2, 0.8, 1)
            if b == 'C': btn_color = (0.8, 0.2, 0.2, 1)
            
            btn = SciButton(text=b, background_color=btn_color)
            btn.bind(on_press=self.handle_press)
            self.keypad.add_widget(btn)
        
        self.add_widget(self.keypad)

    def handle_press(self, instance):
        val = instance.text
        curr = self.display.text

        if val == "=": self.calc()
        elif val == "C": self.display.text = ""
        elif val == "«": self.display.text = curr[:-1]
        elif val == "solve": self.solve_eq()
        elif val == "pi": self.display.text += str(round(math.pi, 6))
        elif val == "conv": self.show_converter(None)
        else: self.display.text += val

    def calc(self):
        try:
            expr = self.display.text.replace('^', '**').replace('sqrt', 'math.sqrt')
            expr = expr.replace('sin', 'math.sin').replace('cos', 'math.cos').replace('tan', 'math.tan')
            # Scoped eval for safety
            result = eval(expr, {"math": math, "__builtins__": None})
            self.display.text = str(round(result, 8))
        except Exception:
            self.display.text = "Error"

    def solve_eq(self):
        try:
            expr = self.display.text
            if '=' not in expr: expr += "=0"
            lhs, rhs = expr.split('=')
            x = symbols('x')
            solution = solve(Eq(sympify(lhs), sympify(rhs)), x)
            self.display.text = f"x = {solution}"
        except Exception:
            self.display.text = "Algebra Error"

    def show_converter(self, instance):
        content = GridLayout(cols=1, spacing=10, padding=20)
        content.add_widget(Label(text="Venocyber Unit Utility", font_size='20sp'))
        
        convs = [
            ("Meters to Feet", 3.28084, "ft"),
            ("Celsius to Fahr", "special", "F"),
            ("Kg to Pounds", 2.20462, "lbs")
        ]
        
        for name, factor, unit in convs:
            btn = Button(text=name, size_hint_y=None, height=50)
            btn.bind(on_press=lambda x, f=factor, u=unit: self.quick_conv(f, u))
            content.add_widget(btn)
            
        self.popup = Popup(title="Converter", content=content, size_hint=(0.6, 0.6))
        self.popup.open()

    def quick_conv(self, factor, unit):
        try:
            val = float(self.display.text)
            if factor == "special": # Celsius to F
                res = (val * 9/5) + 32
            else:
                res = val * factor
            self.display.text = f"{round(res, 4)} {unit}"
            self.popup.dismiss()
        except:
            self.display.text = "Error: Input Number"
            self.popup.dismiss()

    def placeholder_msg(self, instance):
        self.display.text = f"Venocyber {instance.text} Active"

class VenocyberApp(App):
    def build(self):
        return VenocyberCalc()

if __name__ == "__main__":
    VenocyberApp().run()
