// generated - do not edit!

import {client_C_BaseModelEntity} from './C_BaseModelEntity';
// Class size: 0x84C0
// BaseClass: : public CS2::client::C_BaseModelEntity
export const client_C_Inferno  = {
	...client_C_BaseModelEntity,
	m_nfxFireDamageEffect: 3824n, // client::ParticleIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_hInfernoPointsSnapshot: 3832n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSnapshot>  | Schema_Atomic | Size: 0x8
	m_hInfernoFillerPointsSnapshot: 3840n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSnapshot>  | Schema_Atomic | Size: 0x8
	m_hInfernoOutlinePointsSnapshot: 3848n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSnapshot>  | Schema_Atomic | Size: 0x8
	m_hInfernoClimbingOutlinePointsSnapshot: 3856n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSnapshot>  | Schema_Atomic | Size: 0x8
	m_hInfernoDecalsSnapshot: 3864n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSnapshot>  | Schema_Atomic | Size: 0x8
	m_firePositions: 3872n, // GlobalTypes::Vector[64]  | Schema_FixedArray | Size: 0x300
	m_fireParentPositions: 4640n, // GlobalTypes::Vector[64]  | Schema_FixedArray | Size: 0x300
	m_bFireIsBurning: 5408n, // bool m_bFireIsBurning[64]; |  0x1520 | Schema_FixedArray | Size: 0x40
	m_BurnNormal: 5472n, // GlobalTypes::Vector[64]  | Schema_FixedArray | Size: 0x300
	m_fireCount: 6240n, // int32_t m_fireCount; |  0x1860 | Schema_Builtin | Size: 0x4
	m_nInfernoType: 6244n, // int32_t m_nInfernoType; |  0x1864 | Schema_Builtin | Size: 0x4
	m_nFireLifetime: 6248n, // float32 m_nFireLifetime; |  0x1868 | Schema_Builtin | Size: 0x4
	m_bInPostEffectTime: 6252n, // bool m_bInPostEffectTime; |  0x186c | Schema_Builtin | Size: 0x1
	m_lastFireCount: 6256n, // int32_t m_lastFireCount; |  0x1870 | Schema_Builtin | Size: 0x4
	m_nFireEffectTickBegin: 6260n, // int32_t m_nFireEffectTickBegin; |  0x1874 | Schema_Builtin | Size: 0x4
	m_drawableCount: 33920n, // int32_t m_drawableCount; |  0x8480 | Schema_Builtin | Size: 0x4
	m_blosCheck: 33924n, // bool m_blosCheck; |  0x8484 | Schema_Builtin | Size: 0x1
	m_nlosperiod: 33928n, // int32_t m_nlosperiod; |  0x8488 | Schema_Builtin | Size: 0x4
	m_maxFireHalfWidth: 33932n, // float32 m_maxFireHalfWidth; |  0x848c | Schema_Builtin | Size: 0x4
	m_maxFireHeight: 33936n, // float32 m_maxFireHeight; |  0x8490 | Schema_Builtin | Size: 0x4
	m_minBounds: 33940n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_maxBounds: 33952n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flLastGrassBurnThink: 33964n, // float32 m_flLastGrassBurnThink; |  0x84ac | Schema_Builtin | Size: 0x4
}
