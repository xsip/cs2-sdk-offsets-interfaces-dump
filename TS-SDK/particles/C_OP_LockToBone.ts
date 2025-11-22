// generated - do not edit!

import {particles_CParticleFunctionOperator} from './CParticleFunctionOperator';
// Class size: 0xB68
// BaseClass: : public CS2::particles::CParticleFunctionOperator
export const particles_C_OP_LockToBone  = {
	...particles_CParticleFunctionOperator,
	m_modelInput: 464n, // particleslib::CParticleModelInput  | Schema_DeclaredClass | Size: 0x60
	m_transformInput: 560n, // particleslib::CParticleTransformInput  | Schema_DeclaredClass | Size: 0x68
	m_flLifeTimeFadeStart: 664n, // float32 m_flLifeTimeFadeStart; |  0x298 | Schema_Builtin | Size: 0x4
	m_flLifeTimeFadeEnd: 668n, // float32 m_flLifeTimeFadeEnd; |  0x29c | Schema_Builtin | Size: 0x4
	m_flJumpThreshold: 672n, // float32 m_flJumpThreshold; |  0x2a0 | Schema_Builtin | Size: 0x4
	m_flPrevPosScale: 676n, // float32 m_flPrevPosScale; |  0x2a4 | Schema_Builtin | Size: 0x4
	m_HitboxSetName: 680n, // char m_HitboxSetName[128]; |  0x2a8 | Schema_FixedArray | Size: 0x80
	m_bRigid: 808n, // bool m_bRigid; |  0x328 | Schema_Builtin | Size: 0x1
	m_bUseBones: 809n, // bool m_bUseBones; |  0x329 | Schema_Builtin | Size: 0x1
	m_nFieldOutput: 812n, // particles::ParticleAttributeIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_nFieldOutputPrev: 816n, // particles::ParticleAttributeIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_nRotationSetType: 820n, // particles::ParticleRotationLockType_t  | Schema_DeclaredEnum | Size: 0x4
	m_bRigidRotationLock: 824n, // bool m_bRigidRotationLock; |  0x338 | Schema_Builtin | Size: 0x1
	m_vecRotation: 832n, // particleslib::CPerParticleVecInput  | Schema_DeclaredClass | Size: 0x6b8
	m_flRotLerp: 2552n, // particleslib::CPerParticleFloatInput  | Schema_DeclaredClass | Size: 0x170
}
