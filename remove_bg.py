from PIL import Image

img = Image.open('public/logo.png').convert("RGBA")
datas = img.getdata()

# Find the darkest pixel (presumably the actual logo color)
min_brightness = 255
darkest_color = (0, 0, 0)
for item in datas:
    brightness = (item[0] + item[1] + item[2]) / 3
    if brightness < min_brightness:
        min_brightness = brightness
        darkest_color = (item[0], item[1], item[2])

newData = []
for item in datas:
    brightness = (item[0] + item[1] + item[2]) / 3
    # Map brightness to alpha: 255 brightness -> 0 alpha, darkest brightness -> 255 alpha
    # alpha = 255 * (255 - brightness) / (255 - min_brightness)
    if min_brightness >= 250: # Handle edge case where image is almost entirely white
        alpha = 255 if brightness < 250 else 0
    else:
        alpha = int(255 * (255 - brightness) / (255 - min_brightness))
    
    # Clamp alpha
    alpha = max(0, min(255, alpha))
    
    # Set RGB to the darkest color, and use the computed alpha
    newData.append((darkest_color[0], darkest_color[1], darkest_color[2], alpha))

img.putdata(newData)
img.save('public/logo_transparent.png', "PNG")
