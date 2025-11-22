// generated - do not edit!

import {particles_CParticleFunctionRenderer} from './CParticleFunctionRenderer';
// Class size: 0xF08
// BaseClass: : public CS2::particles::CParticleFunctionRenderer
export const particles_C_OP_RenderProjected  = {
	...particles_CParticleFunctionRenderer,
	m_bProjectCharacter: 544n, // bool m_bProjectCharacter; |  0x220 | Schema_Builtin | Size: 0x1
	m_bProjectWorld: 545n, // bool m_bProjectWorld; |  0x221 | Schema_Builtin | Size: 0x1
	m_bProjectWater: 546n, // bool m_bProjectWater; |  0x222 | Schema_Builtin | Size: 0x1
	m_bFlipHorizontal: 547n, // bool m_bFlipHorizontal; |  0x223 | Schema_Builtin | Size: 0x1
	m_bEnableProjectedDepthControls: 548n, // bool m_bEnableProjectedDepthControls; |  0x224 | Schema_Builtin | Size: 0x1
	m_flMinProjectionDepth: 552n, // float32 m_flMinProjectionDepth; |  0x228 | Schema_Builtin | Size: 0x4
	m_flMaxProjectionDepth: 556n, // float32 m_flMaxProjectionDepth; |  0x22c | Schema_Builtin | Size: 0x4
	m_vecProjectedMaterials: 560n, // GlobalTypes::CUtlVector<particles::RenderProjectedMaterial_t>  | Schema_Atomic | Size: 0x18
	m_flMaterialSelection: 584n, // particleslib::CPerParticleFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_flAnimationTimeScale: 952n, // float32 m_flAnimationTimeScale; |  0x3b8 | Schema_Builtin | Size: 0x4
	m_bOrientToNormal: 956n, // bool m_bOrientToNormal; |  0x3bc | Schema_Builtin | Size: 0x1
	m_MaterialVars: 960n, // GlobalTypes::CUtlVector<particles::MaterialVariable_t>  | Schema_Atomic | Size: 0x18
	m_flRadiusScale: 984n, // particleslib::CParticleCollectionFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_flAlphaScale: 1352n, // particleslib::CParticleCollectionFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_flRollScale: 1720n, // particleslib::CParticleCollectionFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_nAlpha2Field: 2088n, // particles::ParticleAttributeIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_vecColorScale: 2096n, // particleslib::CParticleCollectionVecInput  | Schema_DeclaredClass | Size: 0x6b8
	m_nColorBlendType: 3816n, // particles::ParticleColorBlendType_t  | Schema_DeclaredEnum | Size: 0x4
}
