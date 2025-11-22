// generated - do not edit!

import {particles_CParticleFunctionRenderer} from './CParticleFunctionRenderer';
// Class size: 0x2CA0
// BaseClass: : public CS2::particles::CParticleFunctionRenderer
export const particles_C_OP_RenderModels  = {
	...particles_CParticleFunctionRenderer,
	m_bOnlyRenderInEffectsBloomPass: 544n, // bool m_bOnlyRenderInEffectsBloomPass; |  0x220 | Schema_Builtin | Size: 0x1
	m_bOnlyRenderInEffectsWaterPass: 545n, // bool m_bOnlyRenderInEffectsWaterPass; |  0x221 | Schema_Builtin | Size: 0x1
	m_bUseMixedResolutionRendering: 546n, // bool m_bUseMixedResolutionRendering; |  0x222 | Schema_Builtin | Size: 0x1
	m_bOnlyRenderInEffecsGameOverlay: 547n, // bool m_bOnlyRenderInEffecsGameOverlay; |  0x223 | Schema_Builtin | Size: 0x1
	m_ModelList: 552n, // GlobalTypes::CUtlVector<particles::ModelReference_t>  | Schema_Atomic | Size: 0x18
	m_nBodyGroupField: 576n, // particles::ParticleAttributeIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_nSubModelField: 580n, // particles::ParticleAttributeIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_bIgnoreNormal: 584n, // bool m_bIgnoreNormal; |  0x248 | Schema_Builtin | Size: 0x1
	m_bOrientZ: 585n, // bool m_bOrientZ; |  0x249 | Schema_Builtin | Size: 0x1
	m_bCenterOffset: 586n, // bool m_bCenterOffset; |  0x24a | Schema_Builtin | Size: 0x1
	m_vecLocalOffset: 592n, // particleslib::CPerParticleVecInput  | Schema_DeclaredClass | Size: 0x6b8
	m_vecLocalRotation: 2312n, // particleslib::CPerParticleVecInput  | Schema_DeclaredClass | Size: 0x6b8
	m_bIgnoreRadius: 4032n, // bool m_bIgnoreRadius; |  0xfc0 | Schema_Builtin | Size: 0x1
	m_nModelScaleCP: 4036n, // int32_t m_nModelScaleCP; |  0xfc4 | Schema_Builtin | Size: 0x4
	m_vecComponentScale: 4040n, // particleslib::CPerParticleVecInput  | Schema_DeclaredClass | Size: 0x6b8
	m_bLocalScale: 5760n, // bool m_bLocalScale; |  0x1680 | Schema_Builtin | Size: 0x1
	m_nSizeCullBloat: 5764n, // int32_t m_nSizeCullBloat; |  0x1684 | Schema_Builtin | Size: 0x4
	m_bAnimated: 5768n, // bool m_bAnimated; |  0x1688 | Schema_Builtin | Size: 0x1
	m_flAnimationRate: 5776n, // particleslib::CPerParticleFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_bScaleAnimationRate: 6144n, // bool m_bScaleAnimationRate; |  0x1800 | Schema_Builtin | Size: 0x1
	m_bForceLoopingAnimation: 6145n, // bool m_bForceLoopingAnimation; |  0x1801 | Schema_Builtin | Size: 0x1
	m_bResetAnimOnStop: 6146n, // bool m_bResetAnimOnStop; |  0x1802 | Schema_Builtin | Size: 0x1
	m_bManualAnimFrame: 6147n, // bool m_bManualAnimFrame; |  0x1803 | Schema_Builtin | Size: 0x1
	m_nAnimationScaleField: 6148n, // particles::ParticleAttributeIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_nAnimationField: 6152n, // particles::ParticleAttributeIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_nManualFrameField: 6156n, // particles::ParticleAttributeIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_ActivityName: 6160n, // char m_ActivityName[256]; |  0x1810 | Schema_FixedArray | Size: 0x100
	m_SequenceName: 6416n, // char m_SequenceName[256]; |  0x1910 | Schema_FixedArray | Size: 0x100
	m_bEnableClothSimulation: 6672n, // bool m_bEnableClothSimulation; |  0x1a10 | Schema_Builtin | Size: 0x1
	m_ClothEffectName: 6673n, // char m_ClothEffectName[64]; |  0x1a11 | Schema_FixedArray | Size: 0x40
	m_hOverrideMaterial: 6744n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
	m_bOverrideTranslucentMaterials: 6752n, // bool m_bOverrideTranslucentMaterials; |  0x1a60 | Schema_Builtin | Size: 0x1
	m_nSkin: 6760n, // particleslib::CPerParticleFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_MaterialVars: 7128n, // GlobalTypes::CUtlVector<particles::MaterialVariable_t>  | Schema_Atomic | Size: 0x18
	m_flRenderFilter: 7152n, // particleslib::CPerParticleFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_flManualModelSelection: 7520n, // particleslib::CPerParticleFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_modelInput: 7888n, // particleslib::CParticleModelInput  | Schema_DeclaredClass | Size: 0x60
	m_nLOD: 7984n, // int32_t m_nLOD; |  0x1f30 | Schema_Builtin | Size: 0x4
	m_EconSlotName: 7988n, // char m_EconSlotName[256]; |  0x1f34 | Schema_FixedArray | Size: 0x100
	m_bOriginalModel: 8244n, // bool m_bOriginalModel; |  0x2034 | Schema_Builtin | Size: 0x1
	m_bSuppressTint: 8245n, // bool m_bSuppressTint; |  0x2035 | Schema_Builtin | Size: 0x1
	m_nSubModelFieldType: 8248n, // particles::RenderModelSubModelFieldType_t  | Schema_DeclaredEnum | Size: 0x4
	m_bDisableShadows: 8252n, // bool m_bDisableShadows; |  0x203c | Schema_Builtin | Size: 0x1
	m_bDisableDepthPrepass: 8253n, // bool m_bDisableDepthPrepass; |  0x203d | Schema_Builtin | Size: 0x1
	m_bAcceptsDecals: 8254n, // bool m_bAcceptsDecals; |  0x203e | Schema_Builtin | Size: 0x1
	m_bForceDrawInterlevedWithSiblings: 8255n, // bool m_bForceDrawInterlevedWithSiblings; |  0x203f | Schema_Builtin | Size: 0x1
	m_bDoNotDrawInParticlePass: 8256n, // bool m_bDoNotDrawInParticlePass; |  0x2040 | Schema_Builtin | Size: 0x1
	m_bAllowApproximateTransforms: 8257n, // bool m_bAllowApproximateTransforms; |  0x2041 | Schema_Builtin | Size: 0x1
	m_szRenderAttribute: 8258n, // char m_szRenderAttribute[260]; |  0x2042 | Schema_FixedArray | Size: 0x104
	m_flRadiusScale: 8520n, // particleslib::CParticleCollectionFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_flAlphaScale: 8888n, // particleslib::CParticleCollectionFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_flRollScale: 9256n, // particleslib::CParticleCollectionFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_nAlpha2Field: 9624n, // particles::ParticleAttributeIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_vecColorScale: 9632n, // particleslib::CParticleCollectionVecInput  | Schema_DeclaredClass | Size: 0x6b8
	m_nColorBlendType: 11352n, // particles::ParticleColorBlendType_t  | Schema_DeclaredEnum | Size: 0x4
}
