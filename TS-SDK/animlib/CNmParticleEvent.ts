// generated - do not edit!

import {animlib_CNmEvent} from './CNmEvent';
// Class size: 0x70
// BaseClass: : public CS2::animlib::CNmEvent
export const animlib_CNmParticleEvent  = {
	...animlib_CNmEvent,
	m_relevance: 32n, // animlib::CNmEventRelevance_t  | Schema_DeclaredEnum | Size: 0x4
	m_type: 36n, // animlib::CNmParticleEvent::Type_t  | Schema_DeclaredEnum | Size: 0x4
	m_hParticleSystem: 40n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_tags: 48n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_bStopImmediately: 56n, // bool m_bStopImmediately; |  0x38 | Schema_Builtin | Size: 0x1
	m_bDetachFromOwner: 57n, // bool m_bDetachFromOwner; |  0x39 | Schema_Builtin | Size: 0x1
	m_bPlayEndCap: 58n, // bool m_bPlayEndCap; |  0x3a | Schema_Builtin | Size: 0x1
	m_attachmentPoint0: 64n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_attachmentType0: 72n, // animationsystem::ParticleAttachment_t  | Schema_DeclaredEnum | Size: 0x4
	m_attachmentPoint1: 80n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_attachmentType1: 88n, // animationsystem::ParticleAttachment_t  | Schema_DeclaredEnum | Size: 0x4
	m_config: 96n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_effectForConfig: 104n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
}
