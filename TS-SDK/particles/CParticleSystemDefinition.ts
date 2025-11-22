// generated - do not edit!

import {particles_IParticleSystemDefinition} from './IParticleSystemDefinition';
// Class size: 0x440
// BaseClass: : public CS2::particles::IParticleSystemDefinition
export const particles_CParticleSystemDefinition  = {
	...particles_IParticleSystemDefinition,
	m_nBehaviorVersion: 8n, // int32_t m_nBehaviorVersion; |  0x8 | Schema_Builtin | Size: 0x4
	m_PreEmissionOperators: 16n, // GlobalTypes::CUtlVector<particles::CParticleFunctionPreEmission*>  | Schema_Atomic | Size: 0x18
	m_Emitters: 40n, // GlobalTypes::CUtlVector<particles::CParticleFunctionEmitter*>  | Schema_Atomic | Size: 0x18
	m_Initializers: 64n, // GlobalTypes::CUtlVector<particles::CParticleFunctionInitializer*>  | Schema_Atomic | Size: 0x18
	m_Operators: 88n, // GlobalTypes::CUtlVector<particles::CParticleFunctionOperator*>  | Schema_Atomic | Size: 0x18
	m_ForceGenerators: 112n, // GlobalTypes::CUtlVector<particles::CParticleFunctionForce*>  | Schema_Atomic | Size: 0x18
	m_Constraints: 136n, // GlobalTypes::CUtlVector<particles::CParticleFunctionConstraint*>  | Schema_Atomic | Size: 0x18
	m_Renderers: 160n, // GlobalTypes::CUtlVector<particles::CParticleFunctionRenderer*>  | Schema_Atomic | Size: 0x18
	m_Children: 184n, // GlobalTypes::CUtlVector<particles::ParticleChildrenInfo_t>  | Schema_Atomic | Size: 0x18
	m_nFirstMultipleOverride_BackwardCompat: 376n, // int32_t m_nFirstMultipleOverride_BackwardCompat; |  0x178 | Schema_Builtin | Size: 0x4
	m_nInitialParticles: 600n, // int32_t m_nInitialParticles; |  0x258 | Schema_Builtin | Size: 0x4
	m_nMaxParticles: 604n, // int32_t m_nMaxParticles; |  0x25c | Schema_Builtin | Size: 0x4
	m_nGroupID: 608n, // int32_t m_nGroupID; |  0x260 | Schema_Builtin | Size: 0x4
	m_BoundingBoxMin: 612n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_BoundingBoxMax: 624n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flDepthSortBias: 636n, // float32 m_flDepthSortBias; |  0x27c | Schema_Builtin | Size: 0x4
	m_nSortOverridePositionCP: 640n, // int32_t m_nSortOverridePositionCP; |  0x280 | Schema_Builtin | Size: 0x4
	m_bInfiniteBounds: 644n, // bool m_bInfiniteBounds; |  0x284 | Schema_Builtin | Size: 0x1
	m_bEnableNamedValues: 645n, // bool m_bEnableNamedValues; |  0x285 | Schema_Builtin | Size: 0x1
	m_NamedValueDomain: 648n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_NamedValueLocals: 656n, // GlobalTypes::CUtlVector<particleslib::ParticleNamedValueSource_t*>  | Schema_Atomic | Size: 0x18
	m_ConstantColor: 680n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_ConstantNormal: 684n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flConstantRadius: 696n, // float32 m_flConstantRadius; |  0x2b8 | Schema_Builtin | Size: 0x4
	m_flConstantRotation: 700n, // float32 m_flConstantRotation; |  0x2bc | Schema_Builtin | Size: 0x4
	m_flConstantRotationSpeed: 704n, // float32 m_flConstantRotationSpeed; |  0x2c0 | Schema_Builtin | Size: 0x4
	m_flConstantLifespan: 708n, // float32 m_flConstantLifespan; |  0x2c4 | Schema_Builtin | Size: 0x4
	m_nConstantSequenceNumber: 712n, // int32_t m_nConstantSequenceNumber; |  0x2c8 | Schema_Builtin | Size: 0x4
	m_nConstantSequenceNumber1: 716n, // int32_t m_nConstantSequenceNumber1; |  0x2cc | Schema_Builtin | Size: 0x4
	m_nSnapshotControlPoint: 720n, // int32_t m_nSnapshotControlPoint; |  0x2d0 | Schema_Builtin | Size: 0x4
	m_hSnapshot: 728n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSnapshot>  | Schema_Atomic | Size: 0x8
	m_pszCullReplacementName: 736n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_flCullRadius: 744n, // float32 m_flCullRadius; |  0x2e8 | Schema_Builtin | Size: 0x4
	m_flCullFillCost: 748n, // float32 m_flCullFillCost; |  0x2ec | Schema_Builtin | Size: 0x4
	m_nCullControlPoint: 752n, // int32_t m_nCullControlPoint; |  0x2f0 | Schema_Builtin | Size: 0x4
	m_hFallback: 760n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_nFallbackMaxCount: 768n, // int32_t m_nFallbackMaxCount; |  0x300 | Schema_Builtin | Size: 0x4
	m_hLowViolenceDef: 776n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_hReferenceReplacement: 784n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_flPreSimulationTime: 792n, // float32 m_flPreSimulationTime; |  0x318 | Schema_Builtin | Size: 0x4
	m_flStopSimulationAfterTime: 796n, // float32 m_flStopSimulationAfterTime; |  0x31c | Schema_Builtin | Size: 0x4
	m_flMaximumTimeStep: 800n, // float32 m_flMaximumTimeStep; |  0x320 | Schema_Builtin | Size: 0x4
	m_flMaximumSimTime: 804n, // float32 m_flMaximumSimTime; |  0x324 | Schema_Builtin | Size: 0x4
	m_flMinimumSimTime: 808n, // float32 m_flMinimumSimTime; |  0x328 | Schema_Builtin | Size: 0x4
	m_flMinimumTimeStep: 812n, // float32 m_flMinimumTimeStep; |  0x32c | Schema_Builtin | Size: 0x4
	m_nMinimumFrames: 816n, // int32_t m_nMinimumFrames; |  0x330 | Schema_Builtin | Size: 0x4
	m_nMinCPULevel: 820n, // int32_t m_nMinCPULevel; |  0x334 | Schema_Builtin | Size: 0x4
	m_nMinGPULevel: 824n, // int32_t m_nMinGPULevel; |  0x338 | Schema_Builtin | Size: 0x4
	m_flNoDrawTimeToGoToSleep: 828n, // float32 m_flNoDrawTimeToGoToSleep; |  0x33c | Schema_Builtin | Size: 0x4
	m_flMaxDrawDistance: 832n, // float32 m_flMaxDrawDistance; |  0x340 | Schema_Builtin | Size: 0x4
	m_flStartFadeDistance: 836n, // float32 m_flStartFadeDistance; |  0x344 | Schema_Builtin | Size: 0x4
	m_flMaxCreationDistance: 840n, // float32 m_flMaxCreationDistance; |  0x348 | Schema_Builtin | Size: 0x4
	m_nAggregationMinAvailableParticles: 844n, // int32_t m_nAggregationMinAvailableParticles; |  0x34c | Schema_Builtin | Size: 0x4
	m_flAggregateRadius: 848n, // float32 m_flAggregateRadius; |  0x350 | Schema_Builtin | Size: 0x4
	m_bShouldBatch: 852n, // bool m_bShouldBatch; |  0x354 | Schema_Builtin | Size: 0x1
	m_bShouldHitboxesFallbackToRenderBounds: 853n, // bool m_bShouldHitboxesFallbackToRenderBounds; |  0x355 | Schema_Builtin | Size: 0x1
	m_bShouldHitboxesFallbackToSnapshot: 854n, // bool m_bShouldHitboxesFallbackToSnapshot; |  0x356 | Schema_Builtin | Size: 0x1
	m_bShouldHitboxesFallbackToCollisionHulls: 855n, // bool m_bShouldHitboxesFallbackToCollisionHulls; |  0x357 | Schema_Builtin | Size: 0x1
	m_nViewModelEffect: 856n, // particles::InheritableBoolType_t  | Schema_DeclaredEnum | Size: 0x4
	m_bScreenSpaceEffect: 860n, // bool m_bScreenSpaceEffect; |  0x35c | Schema_Builtin | Size: 0x1
	m_pszTargetLayerID: 864n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_nSkipRenderControlPoint: 872n, // int32_t m_nSkipRenderControlPoint; |  0x368 | Schema_Builtin | Size: 0x4
	m_nAllowRenderControlPoint: 876n, // int32_t m_nAllowRenderControlPoint; |  0x36c | Schema_Builtin | Size: 0x4
	m_bShouldSort: 880n, // bool m_bShouldSort; |  0x370 | Schema_Builtin | Size: 0x1
	m_controlPointConfigurations: 952n, // GlobalTypes::CUtlVector<particles::ParticleControlPointConfiguration_t>  | Schema_Atomic | Size: 0x18
}
