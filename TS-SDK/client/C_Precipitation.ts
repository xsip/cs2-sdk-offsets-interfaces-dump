// generated - do not edit!

import {client_C_BaseTrigger} from './C_BaseTrigger';
// Class size: 0xFA8
// BaseClass: : public CS2::client::C_BaseTrigger
export const client_C_Precipitation  = {
	...client_C_BaseTrigger,
	m_flDensity: 3928n, // float32 m_flDensity; |  0xf58 | Schema_Builtin | Size: 0x4
	m_flParticleInnerDist: 3944n, // float32 m_flParticleInnerDist; |  0xf68 | Schema_Builtin | Size: 0x4
	m_pParticleDef: 3952n, // char* m_pParticleDef; |  0xf70 | Schema_Ptr | Size: 0x8
	m_tParticlePrecipTraceTimer: 3992n, // GlobalTypes::TimedEvent[1]  | Schema_FixedArray | Size: 0x10
	m_bActiveParticlePrecipEmitter: 4000n, // bool m_bActiveParticlePrecipEmitter[1]; |  0xfa0 | Schema_FixedArray | Size: 0x1
	m_bParticlePrecipInitialized: 4001n, // bool m_bParticlePrecipInitialized; |  0xfa1 | Schema_Builtin | Size: 0x1
	m_bHasSimulatedSinceLastSceneObjectUpdate: 4002n, // bool m_bHasSimulatedSinceLastSceneObjectUpdate; |  0xfa2 | Schema_Builtin | Size: 0x1
	m_nAvailableSheetSequencesMaxIndex: 4004n, // int32_t m_nAvailableSheetSequencesMaxIndex; |  0xfa4 | Schema_Builtin | Size: 0x4
}
