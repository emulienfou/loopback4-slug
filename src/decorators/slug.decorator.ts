import {PropertyDecoratorFactory} from '@loopback/metadata';
import {MODEL_SLUG_KEY} from '../keys';
import {PropertyDefinition} from '../types';

/**
 * Decorator for model slug
 * @param definition
 * @returns A slug decorator
 */
export function slug(definition?: Partial<PropertyDefinition>) {
  return PropertyDecoratorFactory.createDecorator(
    MODEL_SLUG_KEY,
    Object.assign({}, definition),
    {decoratorName: '@slug'},
  );
}
