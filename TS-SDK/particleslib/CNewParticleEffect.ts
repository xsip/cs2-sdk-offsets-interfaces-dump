// generated - do not edit!

import {particleslib_IParticleEffect} from './IParticleEffect';
// Class size: 0xD8
// BaseClass: : public CS2::particleslib::IParticleEffect
export const particleslib_CNewParticleEffect  = {
	...particleslib_IParticleEffect,
	m_pNext: 16n, // particleslib::CNewParticleEffect**  | Schema_Ptr | Size: 0x8
	m_pPrev: 24n, // particleslib::CNewParticleEffect**  | Schema_Ptr | Size: 0x8
	m_pParticles: 32n, // particles::IParticleCollection**  | Schema_Ptr | Size: 0x8
	m_pDebugName: 40n, // char* m_pDebugName; |  0x28 | Schema_Ptr | Size: 0x8
	m_vSortOrigin: 64n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flScale: 76n, // float32 m_flScale; |  0x4c | Schema_Builtin | Size: 0x4
	m_hOwner: 80n, // particleslib::PARTICLE_EHANDLE__**  | Schema_Ptr | Size: 0x8
	m_pOwningParticleProperty: 88n, // particleslib::CParticleProperty**  | Schema_Ptr | Size: 0x8
	m_flFreezeTransitionStart: 112n, // float32 m_flFreezeTransitionStart; |  0x70 | Schema_Builtin | Size: 0x4
	m_flFreezeTransitionDuration: 116n, // float32 m_flFreezeTransitionDuration; |  0x74 | Schema_Builtin | Size: 0x4
	m_flFreezeTransitionOverride: 120n, // float32 m_flFreezeTransitionOverride; |  0x78 | Schema_Builtin | Size: 0x4
	m_LastMin: 124n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_LastMax: 136n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nSplitScreenUser: 148n, // GlobalTypes::CSplitScreenSlot  | Schema_Atomic | Size: 0x4
	m_vecAggregationCenter: 152n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_RefCount: 208n, // int32_t m_RefCount; |  0xd0 | Schema_Builtin | Size: 0x4
}
