// generated - do not edit!

import {particles_CParticleFunctionPreEmission} from './CParticleFunctionPreEmission';
// Class size: 0x3F8
// BaseClass: : public CS2::particles::CParticleFunctionPreEmission
export const particles_C_OP_SetControlPointToImpactPoint  = {
	...particles_CParticleFunctionPreEmission,
	m_nCPOut: 472n, // int32_t m_nCPOut; |  0x1d8 | Schema_Builtin | Size: 0x4
	m_nCPIn: 476n, // int32_t m_nCPIn; |  0x1dc | Schema_Builtin | Size: 0x4
	m_flUpdateRate: 480n, // float32 m_flUpdateRate; |  0x1e0 | Schema_Builtin | Size: 0x4
	m_flTraceLength: 488n, // particleslib::CParticleCollectionFloatInput  | Schema_DeclaredClass | Size: 0x170
	m_flStartOffset: 856n, // float32 m_flStartOffset; |  0x358 | Schema_Builtin | Size: 0x4
	m_flOffset: 860n, // float32 m_flOffset; |  0x35c | Schema_Builtin | Size: 0x4
	m_vecTraceDir: 864n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_CollisionGroupName: 876n, // char m_CollisionGroupName[128]; |  0x36c | Schema_FixedArray | Size: 0x80
	m_nTraceSet: 1004n, // particles::ParticleTraceSet_t  | Schema_DeclaredEnum | Size: 0x4
	m_bSetToEndpoint: 1008n, // bool m_bSetToEndpoint; |  0x3f0 | Schema_Builtin | Size: 0x1
	m_bTraceToClosestSurface: 1009n, // bool m_bTraceToClosestSurface; |  0x3f1 | Schema_Builtin | Size: 0x1
	m_bIncludeWater: 1010n, // bool m_bIncludeWater; |  0x3f2 | Schema_Builtin | Size: 0x1
}
