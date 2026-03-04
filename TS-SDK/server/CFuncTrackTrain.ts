// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x858
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CFuncTrackTrain  = {
	...server_CBaseModelEntity,
	m_ppath: 1840n, // GlobalTypes::CHandle<server::CPathTrack>  | Schema_Atomic | Size: 0x4
	m_length: 1844n, // float32 m_length; |  0x734 | Schema_Builtin | Size: 0x4
	m_vPosPrev: 1848n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_angPrev: 1860n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_controlMins: 1872n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_controlMaxs: 1884n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lastBlockPos: 1896n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lastBlockTick: 1908n, // int32_t m_lastBlockTick; |  0x774 | Schema_Builtin | Size: 0x4
	m_flVolume: 1912n, // float32 m_flVolume; |  0x778 | Schema_Builtin | Size: 0x4
	m_flBank: 1916n, // float32 m_flBank; |  0x77c | Schema_Builtin | Size: 0x4
	m_oldSpeed: 1920n, // float32 m_oldSpeed; |  0x780 | Schema_Builtin | Size: 0x4
	m_flBlockDamage: 1924n, // float32 m_flBlockDamage; |  0x784 | Schema_Builtin | Size: 0x4
	m_height: 1928n, // float32 m_height; |  0x788 | Schema_Builtin | Size: 0x4
	m_maxSpeed: 1932n, // float32 m_maxSpeed; |  0x78c | Schema_Builtin | Size: 0x4
	m_dir: 1936n, // float32 m_dir; |  0x790 | Schema_Builtin | Size: 0x4
	m_iszSoundMove: 1944n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSoundMovePing: 1952n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSoundStart: 1960n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSoundStop: 1968n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_strPathTarget: 1976n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flMoveSoundMinDuration: 1984n, // float32 m_flMoveSoundMinDuration; |  0x7c0 | Schema_Builtin | Size: 0x4
	m_flMoveSoundMaxDuration: 1988n, // float32 m_flMoveSoundMaxDuration; |  0x7c4 | Schema_Builtin | Size: 0x4
	m_flNextMoveSoundTime: 1992n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flMoveSoundMinPitch: 1996n, // float32 m_flMoveSoundMinPitch; |  0x7cc | Schema_Builtin | Size: 0x4
	m_flMoveSoundMaxPitch: 2000n, // float32 m_flMoveSoundMaxPitch; |  0x7d0 | Schema_Builtin | Size: 0x4
	m_eOrientationType: 2004n, // server::TrainOrientationType_t  | Schema_DeclaredEnum | Size: 0x4
	m_eVelocityType: 2008n, // server::TrainVelocityType_t  | Schema_DeclaredEnum | Size: 0x4
	m_OnStart: 2032n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnNext: 2056n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnArrivedAtDestinationNode: 2080n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_bManualSpeedChanges: 2104n, // bool m_bManualSpeedChanges; |  0x838 | Schema_Builtin | Size: 0x1
	m_flDesiredSpeed: 2108n, // float32 m_flDesiredSpeed; |  0x83c | Schema_Builtin | Size: 0x4
	m_flSpeedChangeTime: 2112n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flAccelSpeed: 2116n, // float32 m_flAccelSpeed; |  0x844 | Schema_Builtin | Size: 0x4
	m_flDecelSpeed: 2120n, // float32 m_flDecelSpeed; |  0x848 | Schema_Builtin | Size: 0x4
	m_bAccelToSpeed: 2124n, // bool m_bAccelToSpeed; |  0x84c | Schema_Builtin | Size: 0x1
	m_flNextMPSoundTime: 2128n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
