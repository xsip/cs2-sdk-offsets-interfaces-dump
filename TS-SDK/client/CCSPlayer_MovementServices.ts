// generated - do not edit!

import {client_CPlayer_MovementServices_Humanoid} from './CPlayer_MovementServices_Humanoid';
// Class size: 0xE58
// BaseClass: : public CS2::client::CPlayer_MovementServices_Humanoid
export const client_CCSPlayer_MovementServices  = {
	...client_CPlayer_MovementServices_Humanoid,
	m_vecLadderNormal: 624n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nLadderSurfacePropIndex: 636n, // int32_t m_nLadderSurfacePropIndex; |  0x27c | Schema_Builtin | Size: 0x4
	m_bDucked: 640n, // bool m_bDucked; |  0x280 | Schema_Builtin | Size: 0x1
	m_flDuckAmount: 644n, // float32 m_flDuckAmount; |  0x284 | Schema_Builtin | Size: 0x4
	m_flDuckSpeed: 648n, // float32 m_flDuckSpeed; |  0x288 | Schema_Builtin | Size: 0x4
	m_bDuckOverride: 652n, // bool m_bDuckOverride; |  0x28c | Schema_Builtin | Size: 0x1
	m_bDesiresDuck: 653n, // bool m_bDesiresDuck; |  0x28d | Schema_Builtin | Size: 0x1
	m_bDucking: 654n, // bool m_bDucking; |  0x28e | Schema_Builtin | Size: 0x1
	m_flDuckOffset: 656n, // float32 m_flDuckOffset; |  0x290 | Schema_Builtin | Size: 0x4
	m_nDuckTimeMsecs: 660n, // uint32_t m_nDuckTimeMsecs; |  0x294 | Schema_Builtin | Size: 0x4
	m_nDuckJumpTimeMsecs: 664n, // uint32_t m_nDuckJumpTimeMsecs; |  0x298 | Schema_Builtin | Size: 0x4
	m_nJumpTimeMsecs: 668n, // uint32_t m_nJumpTimeMsecs; |  0x29c | Schema_Builtin | Size: 0x4
	m_flLastDuckTime: 672n, // float32 m_flLastDuckTime; |  0x2a0 | Schema_Builtin | Size: 0x4
	m_vecLastPositionAtFullCrouchSpeed: 688n, // GlobalTypes::Vector2D  | Schema_Atomic | Size: 0x8
	m_duckUntilOnGround: 696n, // bool m_duckUntilOnGround; |  0x2b8 | Schema_Builtin | Size: 0x1
	m_bHasWalkMovedSinceLastJump: 697n, // bool m_bHasWalkMovedSinceLastJump; |  0x2b9 | Schema_Builtin | Size: 0x1
	m_bInStuckTest: 698n, // bool m_bInStuckTest; |  0x2ba | Schema_Builtin | Size: 0x1
	m_nTraceCount: 1224n, // int32_t m_nTraceCount; |  0x4c8 | Schema_Builtin | Size: 0x4
	m_StuckLast: 1228n, // int32_t m_StuckLast; |  0x4cc | Schema_Builtin | Size: 0x4
	m_bSpeedCropped: 1232n, // bool m_bSpeedCropped; |  0x4d0 | Schema_Builtin | Size: 0x1
	m_nOldWaterLevel: 1236n, // int32_t m_nOldWaterLevel; |  0x4d4 | Schema_Builtin | Size: 0x4
	m_flWaterEntryTime: 1240n, // float32 m_flWaterEntryTime; |  0x4d8 | Schema_Builtin | Size: 0x4
	m_vecForward: 1244n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecLeft: 1256n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecUp: 1268n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nGameCodeHasMovedPlayerAfterCommand: 1280n, // int32_t m_nGameCodeHasMovedPlayerAfterCommand; |  0x500 | Schema_Builtin | Size: 0x4
	m_fStashGrenadeParameterWhen: 1284n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nButtonDownMaskPrev: 1288n, // uint64_t m_nButtonDownMaskPrev; |  0x508 | Schema_Builtin | Size: 0x8
	m_flOffsetTickCompleteTime: 1296n, // float32 m_flOffsetTickCompleteTime; |  0x510 | Schema_Builtin | Size: 0x4
	m_flOffsetTickStashedSpeed: 1300n, // float32 m_flOffsetTickStashedSpeed; |  0x514 | Schema_Builtin | Size: 0x4
	m_flStamina: 1304n, // float32 m_flStamina; |  0x518 | Schema_Builtin | Size: 0x4
	m_flHeightAtJumpStart: 1308n, // float32 m_flHeightAtJumpStart; |  0x51c | Schema_Builtin | Size: 0x4
	m_flMaxJumpHeightThisJump: 1312n, // float32 m_flMaxJumpHeightThisJump; |  0x520 | Schema_Builtin | Size: 0x4
	m_flMaxJumpHeightLastJump: 1316n, // float32 m_flMaxJumpHeightLastJump; |  0x524 | Schema_Builtin | Size: 0x4
	m_flStaminaAtJumpStart: 1320n, // float32 m_flStaminaAtJumpStart; |  0x528 | Schema_Builtin | Size: 0x4
	m_flVelMulAtJumpStart: 1324n, // float32 m_flVelMulAtJumpStart; |  0x52c | Schema_Builtin | Size: 0x4
	m_flAccumulatedJumpError: 1328n, // float32 m_flAccumulatedJumpError; |  0x530 | Schema_Builtin | Size: 0x4
	m_LegacyJump: 1336n, // client::CCSPlayerLegacyJump  | Schema_DeclaredClass | Size: 0x18
	m_ModernJump: 1360n, // client::CCSPlayerModernJump  | Schema_DeclaredClass | Size: 0x38
	m_nLastJumpTick: 1416n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_flLastJumpFrac: 1420n, // float32 m_flLastJumpFrac; |  0x58c | Schema_Builtin | Size: 0x4
	m_flLastJumpVelocityZ: 1424n, // float32 m_flLastJumpVelocityZ; |  0x590 | Schema_Builtin | Size: 0x4
	m_bJumpApexPending: 1428n, // bool m_bJumpApexPending; |  0x594 | Schema_Builtin | Size: 0x1
	m_flTicksSinceLastSurfingDetected: 1432n, // float32 m_flTicksSinceLastSurfingDetected; |  0x598 | Schema_Builtin | Size: 0x4
	m_bWasSurfing: 1436n, // bool m_bWasSurfing; |  0x59c | Schema_Builtin | Size: 0x1
	m_vecInputRotated: 1580n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
}
