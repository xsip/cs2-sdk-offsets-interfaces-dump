// generated - do not edit!

import {particles_CParticleFunctionConstraint} from './CParticleFunctionConstraint';
// Class size: 0x9D0
// BaseClass: : public CS2::particles::CParticleFunctionConstraint
export const particles_C_OP_WorldTraceConstraint  = {
	...particles_CParticleFunctionConstraint,
	m_nCP: 464n, // int32_t m_nCP; |  0x1d0 | Schema_Builtin | Size: 0x4
	m_vecCpOffset: 468n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nCollisionMode: 480n, // particles::ParticleCollisionMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_nCollisionModeMin: 484n, // particles::ParticleCollisionMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_nTraceSet: 488n, // particles::ParticleTraceSet_t  | Schema_DeclaredEnum | Size: 0x4
	m_CollisionGroupName: 492n, // char m_CollisionGroupName[128]; |  0x1ec | Schema_FixedArray | Size: 0x80
	m_bWorldOnly: 620n, // bool m_bWorldOnly; |  0x26c | Schema_Builtin | Size: 0x1
	m_bBrushOnly: 621n, // bool m_bBrushOnly; |  0x26d | Schema_Builtin | Size: 0x1
	m_bIncludeWater: 622n, // bool m_bIncludeWater; |  0x26e | Schema_Builtin | Size: 0x1
	m_nIgnoreCP: 624n, // int32_t m_nIgnoreCP; |  0x270 | Schema_Builtin | Size: 0x4
	m_flCpMovementTolerance: 628n, // float32 m_flCpMovementTolerance; |  0x274 | Schema_Builtin | Size: 0x4
	m_flRetestRate: 632n, // float32 m_flRetestRate; |  0x278 | Schema_Builtin | Size: 0x4
	m_flTraceTolerance: 636n, // float32 m_flTraceTolerance; |  0x27c | Schema_Builtin | Size: 0x4
	m_flCollisionConfirmationSpeed: 640n, // float32 m_flCollisionConfirmationSpeed; |  0x280 | Schema_Builtin | Size: 0x4
	m_nMaxTracesPerFrame: 644n, // float32 m_nMaxTracesPerFrame; |  0x284 | Schema_Builtin | Size: 0x4
	m_flRadiusScale: 648n, // particleslib::CPerParticleFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_flBounceAmount: 1016n, // particleslib::CPerParticleFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_flSlideAmount: 1384n, // particleslib::CPerParticleFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_flRandomDirScale: 1752n, // particleslib::CPerParticleFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_bDecayBounce: 2120n, // bool m_bDecayBounce; |  0x848 | Schema_Builtin | Size: 0x1
	m_bKillonContact: 2121n, // bool m_bKillonContact; |  0x849 | Schema_Builtin | Size: 0x1
	m_flMinSpeed: 2124n, // float32 m_flMinSpeed; |  0x84c | Schema_Builtin | Size: 0x4
	m_bSetNormal: 2128n, // bool m_bSetNormal; |  0x850 | Schema_Builtin | Size: 0x1
	m_nStickOnCollisionField: 2132n, // particles::ParticleAttributeIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_flStopSpeed: 2136n, // particleslib::CPerParticleFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_nEntityStickDataField: 2504n, // particles::ParticleAttributeIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_nEntityStickNormalField: 2508n, // particles::ParticleAttributeIndex_t  | Schema_DeclaredClass | Size: 0x4
}
