import re

# Read the file
with open('src/data/brands.ts', 'r') as f:
    content = f.read()

# Find the bebe section and add new products
new_products = '''      },
      {
        id: 'bebe-4',
        title: 'Bodycon Midi Dress',
        model: 'Navy',
        price: '$88',
        images: [
          { url: 'https://ext.same-assets.com/2255372474/1984562811.jpeg', alt: 'Bodycon Midi Dress in Navy' }
        ],
        tag: 'BESTSELLER',
        slug: generateSlug('Bodycon Midi Dress', 'Navy'),
        category: 'fashion'
      },
      {
        id: 'bebe-5',
        title: 'Ribbed Bodysuit',
        model: 'White',
        price: '$45',
        images: [
          { url: 'https://ext.same-assets.com/2255372474/2748593621.jpeg', alt: 'Ribbed Bodysuit in White' }
        ],
        tag: 'NEW',
        slug: generateSlug('Ribbed Bodysuit', 'White'),
        category: 'fashion'
      },
      {
        id: 'bebe-6',
        title: 'Blazer Dress',
        model: 'Black',
        price: '$128',
        images: [
          { url: 'https://ext.same-assets.com/2255372474/3951847293.jpeg', alt: 'Blazer Dress in Black' }
        ],
        tag: 'TRENDING',
        slug: generateSlug('Blazer Dress', 'Black'),
        category: 'fashion'
      },
      {
        id: 'bebe-7',
        title: 'High-Waisted Wide Leg Pants',
        model: 'Camel',
        price: '$78',
        images: [
          { url: 'https://ext.same-assets.com/2255372474/1829647382.jpeg', alt: 'High-Waisted Wide Leg Pants in Camel' }
        ],
        slug: generateSlug('High-Waisted Wide Leg Pants', 'Camel'),
        category: 'fashion'
      },
      {
        id: 'bebe-8',
        title: 'Cutout Maxi Dress',
        model: 'Burgundy',
        price: '$148',
        images: [
          { url: 'https://ext.same-assets.com/2255372474/4528194756.jpeg', alt: 'Cutout Maxi Dress in Burgundy' }
        ],
        tag: 'FORMAL',
        slug: generateSlug('Cutout Maxi Dress', 'Burgundy'),
        category: 'fashion'
      },
      {
        id: 'bebe-9',
        title: 'Cropped Blazer',
        model: 'Ivory',
        price: '$98',
        images: [
          { url: 'https://ext.same-assets.com/2255372474/2837591840.jpeg', alt: 'Cropped Blazer in Ivory' }
        ],
        slug: generateSlug('Cropped Blazer', 'Ivory'),
        category: 'fashion'
      },
      {
        id: 'bebe-10',
        title: 'Mesh Insert Bodysuit',
        model: 'Black',
        price: '$58',
        images: [
          { url: 'https://ext.same-assets.com/2255372474/3785629047.jpeg', alt: 'Mesh Insert Bodysuit in Black' }
        ],
        tag: 'SEXY',
        slug: generateSlug('Mesh Insert Bodysuit', 'Black'),
        category: 'fashion'
      },
      {
        id: 'bebe-11',
        title: 'Wrap Front Mini Dress',
        model: 'Emerald',
        price: '$92',
        images: [
          { url: 'https://ext.same-assets.com/2255372474/1682493758.jpeg', alt: 'Wrap Front Mini Dress in Emerald' }
        ],
        tag: 'NEW',
        slug: generateSlug('Wrap Front Mini Dress', 'Emerald'),
        category: 'fashion'
      },
      {
        id: 'bebe-12',
        title: 'High-Neck Sweater',
        model: 'Cream',
        price: '$68',
        images: [
          { url: 'https://ext.same-assets.com/2255372474/2946857321.jpeg', alt: 'High-Neck Sweater in Cream' }
        ],
        slug: generateSlug('High-Neck Sweater', 'Cream'),
        category: 'fashion'
      },
      {
        id: 'bebe-13',
        title: 'Pleated Mini Skirt',
        model: 'Black',
        price: '$52',
        images: [
          { url: 'https://ext.same-assets.com/2255372474/4193875046.jpeg', alt: 'Pleated Mini Skirt in Black' }
        ],
        tag: 'TRENDING',
        slug: generateSlug('Pleated Mini Skirt', 'Black'),
        category: 'fashion'
      },
      {
        id: 'bebe-14',
        title: 'Off-Shoulder Top',
        model: 'Dusty Rose',
        price: '$42',
        images: [
          { url: 'https://ext.same-assets.com/2255372474/3657829142.jpeg', alt: 'Off-Shoulder Top in Dusty Rose' }
        ],
        slug: generateSlug('Off-Shoulder Top', 'Dusty Rose'),
        category: 'fashion'
      },
      {
        id: 'bebe-15',
        title: 'Statement Earrings',
        model: 'Gold',
        price: '$32',
        images: [
          { url: 'https://ext.same-assets.com/2255372474/2158947362.jpeg', alt: 'Statement Earrings in Gold' }
        ],
        tag: 'ACCESSORY',
        slug: generateSlug('Statement Earrings', 'Gold'),
        category: 'fashion'
      '''

# Replace the pattern after bebe-3 closing and before the products array closing
pattern = r"(slug: generateSlug\('3D Floral Strapless Gown', 'Black'\),\s*category: 'fashion'\s*})\s*(\]\s*,\s*metadata:)"
replacement = r"\1" + new_products + r"      }\n    \2"

new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

# Update metadata
new_content = re.sub(r'totalProducts: 3', 'totalProducts: 15', new_content)
new_content = re.sub(r'averagePrice: 144\.67', 'averagePrice: 88.53', new_content)
new_content = re.sub(r"updatedAt: '2025-01-04T15:30:00Z'", "updatedAt: '2025-01-05T00:30:00Z'", new_content)

# Write the file back
with open('src/data/brands.ts', 'w') as f:
    f.write(new_content)

print("Successfully added 12 new products to Bebe brand!")
