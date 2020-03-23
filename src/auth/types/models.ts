import * as t from 'io-ts';
import isEmail from 'validator/lib/isEmail';

interface NonEmptyStringBrand {
	readonly NonEmptyString: unique symbol;
}

export const NonEmptyString = t.brand(
	t.string,
	(s): s is t.Branded<string, NonEmptyStringBrand> => s.length > 0,
	'NonEmptyString',
);

interface TrimmedStringBrand {
	readonly TrimmedString: unique symbol;
}

export const TrimmedString = t.brand(
	t.string,
	(s): s is t.Branded<string, TrimmedStringBrand> =>
	  s.trim().length === s.length,
	'TrimmedString',
);

interface Max64StringBrand {
	readonly Max64String: unique symbol;
}

export const Max64String = t.brand(
	t.string,
	(s): s is t.Branded<string, Max64StringBrand> => s.length <= 64,
	'Max64String',
);

export const NonEmptyTrimmedString = t.intersection([
	// The order matters. UI can show the first error only.
	NonEmptyString,
	TrimmedString,
]);

interface EmailStringBrand {
	readonly EmailString: unique symbol;
}

export const EmailString = t.brand(
	t.string,
	(s): s is t.Branded<string, EmailStringBrand> => isEmail(s),
	'EmailString',
);
export const String64 = t.intersection([NonEmptyTrimmedString, Max64String]);
export type String64 = t.TypeOf<typeof String64>;

export const Email = t.intersection([String64, EmailString]);

export type Email = t.TypeOf<typeof Email>;

interface UniqueEmailBrand {
  readonly UniqueEmail: unique symbol;
}

export const UniqueEmail = t.brand(
	Email,
	(_s): _s is t.Branded<Email, UniqueEmailBrand> => true,
	'UniqueEmail',
);

export type UniqueEmail = t.TypeOf<typeof UniqueEmail>;