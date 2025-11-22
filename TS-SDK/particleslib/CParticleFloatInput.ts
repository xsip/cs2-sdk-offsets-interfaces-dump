// generated - do not edit!

import {particleslib_CParticleInput} from './CParticleInput';
// Class size: 0x170
// BaseClass: : public CS2::particleslib::CParticleInput
export const particleslib_CParticleFloatInput  = {
	...particleslib_CParticleInput,
	m_nType: 16n, // particleslib::ParticleFloatType_t  | Schema_DeclaredEnum | Size: 0x4
	m_nMapType: 20n, // particleslib::ParticleFloatMapType_t  | Schema_DeclaredEnum | Size: 0x4
	m_flLiteralValue: 24n, // float32 m_flLiteralValue; |  0x18 | Schema_Builtin | Size: 0x4
	m_NamedValue: 32n, // GlobalTypes::CParticleNamedValueRef  | Schema_Atomic | Size: 0x40
	m_nControlPoint: 96n, // int32_t m_nControlPoint; |  0x60 | Schema_Builtin | Size: 0x4
	m_nScalarAttribute: 100n, // particles::ParticleAttributeIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_nVectorAttribute: 104n, // particles::ParticleAttributeIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_nVectorComponent: 108n, // int32_t m_nVectorComponent; |  0x6c | Schema_Builtin | Size: 0x4
	m_bReverseOrder: 112n, // bool m_bReverseOrder; |  0x70 | Schema_Builtin | Size: 0x1
	m_flRandomMin: 116n, // float32 m_flRandomMin; |  0x74 | Schema_Builtin | Size: 0x4
	m_flRandomMax: 120n, // float32 m_flRandomMax; |  0x78 | Schema_Builtin | Size: 0x4
	m_bHasRandomSignFlip: 124n, // bool m_bHasRandomSignFlip; |  0x7c | Schema_Builtin | Size: 0x1
	m_nRandomSeed: 128n, // int32_t m_nRandomSeed; |  0x80 | Schema_Builtin | Size: 0x4
	m_nRandomMode: 132n, // particleslib::ParticleFloatRandomMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_strSnapshotSubset: 144n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_flLOD0: 152n, // float32 m_flLOD0; |  0x98 | Schema_Builtin | Size: 0x4
	m_flLOD1: 156n, // float32 m_flLOD1; |  0x9c | Schema_Builtin | Size: 0x4
	m_flLOD2: 160n, // float32 m_flLOD2; |  0xa0 | Schema_Builtin | Size: 0x4
	m_flLOD3: 164n, // float32 m_flLOD3; |  0xa4 | Schema_Builtin | Size: 0x4
	m_nNoiseInputVectorAttribute: 168n, // particles::ParticleAttributeIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_flNoiseOutputMin: 172n, // float32 m_flNoiseOutputMin; |  0xac | Schema_Builtin | Size: 0x4
	m_flNoiseOutputMax: 176n, // float32 m_flNoiseOutputMax; |  0xb0 | Schema_Builtin | Size: 0x4
	m_flNoiseScale: 180n, // float32 m_flNoiseScale; |  0xb4 | Schema_Builtin | Size: 0x4
	m_vecNoiseOffsetRate: 184n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flNoiseOffset: 196n, // float32 m_flNoiseOffset; |  0xc4 | Schema_Builtin | Size: 0x4
	m_nNoiseOctaves: 200n, // int32_t m_nNoiseOctaves; |  0xc8 | Schema_Builtin | Size: 0x4
	m_nNoiseTurbulence: 204n, // particleslib::PFNoiseTurbulence_t  | Schema_DeclaredEnum | Size: 0x4
	m_nNoiseType: 208n, // particleslib::PFNoiseType_t  | Schema_DeclaredEnum | Size: 0x4
	m_nNoiseModifier: 212n, // particleslib::PFNoiseModifier_t  | Schema_DeclaredEnum | Size: 0x4
	m_flNoiseTurbulenceScale: 216n, // float32 m_flNoiseTurbulenceScale; |  0xd8 | Schema_Builtin | Size: 0x4
	m_flNoiseTurbulenceMix: 220n, // float32 m_flNoiseTurbulenceMix; |  0xdc | Schema_Builtin | Size: 0x4
	m_flNoiseImgPreviewScale: 224n, // float32 m_flNoiseImgPreviewScale; |  0xe0 | Schema_Builtin | Size: 0x4
	m_bNoiseImgPreviewLive: 228n, // bool m_bNoiseImgPreviewLive; |  0xe4 | Schema_Builtin | Size: 0x1
	m_flNoCameraFallback: 240n, // float32 m_flNoCameraFallback; |  0xf0 | Schema_Builtin | Size: 0x4
	m_bUseBoundsCenter: 244n, // bool m_bUseBoundsCenter; |  0xf4 | Schema_Builtin | Size: 0x1
	m_nInputMode: 248n, // particleslib::ParticleFloatInputMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_flMultFactor: 252n, // float32 m_flMultFactor; |  0xfc | Schema_Builtin | Size: 0x4
	m_flInput0: 256n, // float32 m_flInput0; |  0x100 | Schema_Builtin | Size: 0x4
	m_flInput1: 260n, // float32 m_flInput1; |  0x104 | Schema_Builtin | Size: 0x4
	m_flOutput0: 264n, // float32 m_flOutput0; |  0x108 | Schema_Builtin | Size: 0x4
	m_flOutput1: 268n, // float32 m_flOutput1; |  0x10c | Schema_Builtin | Size: 0x4
	m_flNotchedRangeMin: 272n, // float32 m_flNotchedRangeMin; |  0x110 | Schema_Builtin | Size: 0x4
	m_flNotchedRangeMax: 276n, // float32 m_flNotchedRangeMax; |  0x114 | Schema_Builtin | Size: 0x4
	m_flNotchedOutputOutside: 280n, // float32 m_flNotchedOutputOutside; |  0x118 | Schema_Builtin | Size: 0x4
	m_flNotchedOutputInside: 284n, // float32 m_flNotchedOutputInside; |  0x11c | Schema_Builtin | Size: 0x4
	m_nRoundType: 288n, // particleslib::ParticleFloatRoundType_t  | Schema_DeclaredEnum | Size: 0x4
	m_nBiasType: 292n, // particleslib::ParticleFloatBiasType_t  | Schema_DeclaredEnum | Size: 0x4
	m_flBiasParameter: 296n, // float32 m_flBiasParameter; |  0x128 | Schema_Builtin | Size: 0x4
	m_Curve: 304n, // GlobalTypes::CPiecewiseCurve  | Schema_Atomic | Size: 0x40
}
