export const parse = sentence => sentence.replace(/[_-]/g, ' ').replace(/\s+/g, ' ').trim().split(' ').map(n => n[0].toUpperCase()).join('')
