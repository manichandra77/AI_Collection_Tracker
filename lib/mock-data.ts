export interface CollectionItem {
  id: string
  brand: string
  model: string
  category: string
  tags: string[]
  value: number
  acquired: string
  condition: 'Mint' | 'Excellent' | 'Good' | 'Fair'
  imageUrl?: string
}

export const mockCollectionItems: CollectionItem[] = [
  {
    id: '1',
    brand: 'Rolex',
    model: 'Submariner Date',
    category: 'Watches',
    tags: ['41mm dial', 'Ceramic bezel', '2023'],
    value: 14500,
    acquired: '2023-06-15',
    condition: 'Mint',
  },
  {
    id: '2',
    brand: 'Hot Wheels',
    model: "'67 Camaro",
    category: 'Die-Cast',
    tags: ['Red Line Club', 'Spectraflame', 'Limited'],
    value: 850,
    acquired: '2022-11-20',
    condition: 'Excellent',
  },
  {
    id: '3',
    brand: 'Omega',
    model: 'Speedmaster Professional',
    category: 'Watches',
    tags: ['42mm dial', 'Moonwatch', 'Hesalite'],
    value: 7200,
    acquired: '2021-03-10',
    condition: 'Excellent',
  },
  {
    id: '4',
    brand: 'LEGO',
    model: 'Millennium Falcon UCS',
    category: 'Collectibles',
    tags: ['Set 75192', 'Sealed', '7541 pcs'],
    value: 1200,
    acquired: '2024-01-05',
    condition: 'Mint',
  },
  {
    id: '5',
    brand: 'Matchbox',
    model: 'Superfast #1 Dodge Challenger',
    category: 'Die-Cast',
    tags: ['1971 Release', 'Original Box', 'Purple'],
    value: 320,
    acquired: '2020-08-12',
    condition: 'Good',
  },
  {
    id: '6',
    brand: 'Patek Philippe',
    model: 'Nautilus 5711/1A',
    category: 'Watches',
    tags: ['40mm dial', 'Blue dial', 'Steel'],
    value: 125000,
    acquired: '2020-02-28',
    condition: 'Mint',
  },
  {
    id: '7',
    brand: 'Hot Wheels',
    model: 'Beach Bomb',
    category: 'Die-Cast',
    tags: ['Prototype', 'Pink', 'Rear-loader'],
    value: 15000,
    acquired: '2019-04-15',
    condition: 'Fair',
  },
  {
    id: '8',
    brand: 'Tudor',
    model: 'Black Bay 58',
    category: 'Watches',
    tags: ['39mm dial', 'Navy blue', 'Gilt'],
    value: 3800,
    acquired: '2023-09-01',
    condition: 'Excellent',
  },
  {
    id: '9',
    brand: 'Funko',
    model: 'Freddy Funko #01',
    category: 'Collectibles',
    tags: ['SDCC Exclusive', 'LE 240', 'Grail'],
    value: 4500,
    acquired: '2018-07-20',
    condition: 'Mint',
  },
]

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'assistant',
    content: 'Hello! I\'m your AI collection assistant. I can help you track values, suggest acquisitions, or answer questions about your collection. What would you like to know?',
    timestamp: new Date(Date.now() - 60000),
  },
]
