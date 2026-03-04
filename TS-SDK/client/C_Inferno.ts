// generated - do not edit!

import {client_C_BaseModelEntity} from './C_BaseModelEntity';
// Class size: 0x8490
// BaseClass: : public CS2::client::C_BaseModelEntity
export const client_C_Inferno  = {
	...client_C_BaseModelEntity,
	m_nfxFireDamageEffect: 3784n, // client::ParticleIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_hInfernoPointsSnapshot: 3792n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSnapshot>  | Schema_Atomic | Size: 0x8
	m_hInfernoFillerPointsSnapshot: 3800n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSnapshot>  | Schema_Atomic | Size: 0x8
	m_hInfernoOutlinePointsSnapshot: 3808n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSnapshot>  | Schema_Atomic | Size: 0x8
	m_hInfernoClimbingOutlinePointsSnapshot: 3816n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSnapshot>  | Schema_Atomic | Size: 0x8
	m_hInfernoDecalsSnapshot: 3824n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSnapshot>  | Schema_Atomic | Size: 0x8
	m_firePositions: 3832n, // GlobalTypes::Vector[64]  | Schema_FixedArray | Size: 0x300
	m_fireParentPositions: 4600n, // GlobalTypes::Vector[64]  | Schema_FixedArray | Size: 0x300
	m_bFireIsBurning: 5368n, // bool m_bFireIsBurning[64]; |  0x14f8 | Schema_FixedArray | Size: 0x40
	m_BurnNormal: 5432n, // GlobalTypes::Vector[64]  | Schema_FixedArray | Size: 0x300
	m_fireCount: 6200n, // int32_t m_fireCount; |  0x1838 | Schema_Builtin | Size: 0x4
	m_nInfernoType: 6204n, // int32_t m_nInfernoType; |  0x183c | Schema_Builtin | Size: 0x4
	m_nFireLifetime: 6208n, // float32 m_nFireLifetime; |  0x1840 | Schema_Builtin | Size: 0x4
	m_bInPostEffectTime: 6212n, // bool m_bInPostEffectTime; |  0x1844 | Schema_Builtin | Size: 0x1
	m_lastFireCount: 6216n, // int32_t m_lastFireCount; |  0x1848 | Schema_Builtin | Size: 0x4
	m_nFireEffectTickBegin: 6220n, // int32_t m_nFireEffectTickBegin; |  0x184c | Schema_Builtin | Size: 0x4
	m_drawableCount: 33872n, // int32_t m_drawableCount; |  0x8450 | Schema_Builtin | Size: 0x4
	m_blosCheck: 33876n, // bool m_blosCheck; |  0x8454 | Schema_Builtin | Size: 0x1
	m_nlosperiod: 33880n, // int32_t m_nlosperiod; |  0x8458 | Schema_Builtin | Size: 0x4
	m_maxFireHalfWidth: 33884n, // float32 m_maxFireHalfWidth; |  0x845c | Schema_Builtin | Size: 0x4
	m_maxFireHeight: 33888n, // float32 m_maxFireHeight; |  0x8460 | Schema_Builtin | Size: 0x4
	m_minBounds: 33892n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_maxBounds: 33904n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flLastGrassBurnThink: 33916n, // float32 m_flLastGrassBurnThink; |  0x847c | Schema_Builtin | Size: 0x4
}
