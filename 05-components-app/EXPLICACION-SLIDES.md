# Cómo funciona el Slides (resumen)

Solo lectura, ningún código lo importa. 3 archivos:

- `data/slides.ts` → la **data**
- `SlideItem.tsx` → **una** slide
- `SlidesScreen.tsx` → la **pantalla** (carrusel + paginación)

## 1. La data

```ts
export const slides: Slide[] = [
  { title: 'Titulo 1', desc: '...', img: require('../assets/slide-1.png') },
  ...
];
```

Un arreglo plano de objetos. `interface Slide` es el molde (qué campos debe tener cada uno).

## 2. Cómo se pide y se recorre

```tsx
import { slides } from '../../data/slides';

<FlatList
  data={slides}
  renderItem={({ item }) => <SlideItem item={item} />}
  horizontal
  pagingEnabled
  onScroll={onScroll}
/>
```

`data={slides}` le da la lista completa al `FlatList`. Por cada elemento, `renderItem` crea un `SlideItem` y le pasa ese elemento como prop `item`. `horizontal` hace que el scroll sea de lado a lado; `pagingEnabled` hace que "trabe" exactamente en cada slide (efecto carrusel).

## 3. Cómo se dibuja una slide

```tsx
const { width } = useWindowDimensions();
<View style={{ width }}>
  <Image style={{ width: width * 0.7, height: width * 0.7 }} source={img} />
  ...
```

`useWindowDimensions()` da el ancho real de la pantalla. Cada slide mide exactamente ese ancho — por eso el `pagingEnabled` sabe dónde trabar el scroll (salta de a `width` en `width`). La imagen ocupa el 70% de ese ancho, solo por estética.

## 4. La fórmula para saber en qué slide estás

```tsx
const { contentOffset, layoutMeasurement } = event.nativeEvent;
const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
```

Es una regla de tres: "¿cuántas pantallas enteras me desplacé?"

| slide | contentOffset.x | width | resultado |
|---|---|---|---|
| 1ra | 0 | 400 | 0 |
| 2da | 400 | 400 | 1 |
| 3ra | 800 | 400 | 2 |

`Math.floor` redondea para abajo, así mientras arrastrás el dedo (offset a mitad de camino, ej. `180`) seguís "en" la slide de la que saliste hasta cruzarla del todo. El resultado se guarda en el estado `currentSlideIndex`, que al cambiar hace re-renderizar y actualiza el botón.

## 5. Mover el carrusel por código

```tsx
const flatListRef = useRef<FlatList>(null);
flatListRef.current.scrollToIndex({ index, animated: true });
```

`useRef` apunta al `FlatList` real para poder controlarlo desde afuera (por ejemplo desde un botón). `scrollToIndex` ya viene incluido en `FlatList`, no hay que calcular nada a mano.

## 6. Botón "Siguiente" / "Finalizar"

```tsx
{currentSlideIndex === slides.length - 1
  ? <Button text="Finalizar" onPress={() => navigation.goBack()} />
  : <Button text="Siguiente" onPress={() => scrollToSlide(currentSlideIndex + 1)} />}
```

`slides.length - 1` es el índice de la última slide. Si estás en esa, mostrás "Finalizar" (vuelve atrás); si no, "Siguiente" (avanza una slide).
