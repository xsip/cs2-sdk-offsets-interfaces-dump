// generated - do not edit!

import {animlib_CNmEvent} from './CNmEvent';
// Class size: 0x50
// BaseClass: : public CS2::animlib::CNmEvent
export const animlib_CNmSoundEvent  = {
	...animlib_CNmEvent,
	m_relevance: 32n, // animlib::CNmEventRelevance_t  | Schema_DeclaredEnum | Size: 0x4
	m_name: 40n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_position: 48n, // animlib::CNmSoundEvent::Position_t  | Schema_DeclaredEnum | Size: 0x4
	m_attachmentName: 56n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_tags: 64n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_bContinuePlayingSoundAtDurationEnd: 72n, // bool m_bContinuePlayingSoundAtDurationEnd; |  0x48 | Schema_Builtin | Size: 0x1
	m_flDurationInterruptionThreshold: 76n, // float32 m_flDurationInterruptionThreshold; |  0x4c | Schema_Builtin | Size: 0x4
}
