// generated - do not edit!

import {server_CPlayer_MovementServices_Humanoid} from './CPlayer_MovementServices_Humanoid';
// Class size: 0xE10
// BaseClass: : public CS2::server::CPlayer_MovementServices_Humanoid
export const server_CCSPlayer_MovementServices  = {
	...server_CPlayer_MovementServices_Humanoid,
	m_vecLadderNormal: 640n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nLadderSurfacePropIndex: 652n, // int32_t m_nLadderSurfacePropIndex; |  0x28c | Schema_Builtin | Size: 0x4
	m_flDuckAmount: 656n, // float32 m_flDuckAmount; |  0x290 | Schema_Builtin | Size: 0x4
	m_flDuckSpeed: 660n, // float32 m_flDuckSpeed; |  0x294 | Schema_Builtin | Size: 0x4
	m_bDuckOverride: 664n, // bool m_bDuckOverride; |  0x298 | Schema_Builtin | Size: 0x1
	m_bDesiresDuck: 665n, // bool m_bDesiresDuck; |  0x299 | Schema_Builtin | Size: 0x1
	m_flDuckOffset: 668n, // float32 m_flDuckOffset; |  0x29c | Schema_Builtin | Size: 0x4
	m_nDuckTimeMsecs: 672n, // uint32_t m_nDuckTimeMsecs; |  0x2a0 | Schema_Builtin | Size: 0x4
	m_nDuckJumpTimeMsecs: 676n, // uint32_t m_nDuckJumpTimeMsecs; |  0x2a4 | Schema_Builtin | Size: 0x4
	m_nJumpTimeMsecs: 680n, // uint32_t m_nJumpTimeMsecs; |  0x2a8 | Schema_Builtin | Size: 0x4
	m_flLastDuckTime: 684n, // float32 m_flLastDuckTime; |  0x2ac | Schema_Builtin | Size: 0x4
	m_vecLastPositionAtFullCrouchSpeed: 696n, // GlobalTypes::Vector2D  | Schema_Atomic | Size: 0x8
	m_duckUntilOnGround: 704n, // bool m_duckUntilOnGround; |  0x2c0 | Schema_Builtin | Size: 0x1
	m_bHasWalkMovedSinceLastJump: 705n, // bool m_bHasWalkMovedSinceLastJump; |  0x2c1 | Schema_Builtin | Size: 0x1
	m_bInStuckTest: 706n, // bool m_bInStuckTest; |  0x2c2 | Schema_Builtin | Size: 0x1
	m_nTraceCount: 1232n, // int32_t m_nTraceCount; |  0x4d0 | Schema_Builtin | Size: 0x4
	m_StuckLast: 1236n, // int32_t m_StuckLast; |  0x4d4 | Schema_Builtin | Size: 0x4
	m_bSpeedCropped: 1240n, // bool m_bSpeedCropped; |  0x4d8 | Schema_Builtin | Size: 0x1
	m_nOldWaterLevel: 1244n, // int32_t m_nOldWaterLevel; |  0x4dc | Schema_Builtin | Size: 0x4
	m_flWaterEntryTime: 1248n, // float32 m_flWaterEntryTime; |  0x4e0 | Schema_Builtin | Size: 0x4
	m_vecForward: 1252n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecLeft: 1264n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecUp: 1276n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nGameCodeHasMovedPlayerAfterCommand: 1288n, // int32_t m_nGameCodeHasMovedPlayerAfterCommand; |  0x508 | Schema_Builtin | Size: 0x4
	m_bMadeFootstepNoise: 1292n, // bool m_bMadeFootstepNoise; |  0x50c | Schema_Builtin | Size: 0x1
	m_iFootsteps: 1296n, // int32_t m_iFootsteps; |  0x510 | Schema_Builtin | Size: 0x4
	m_bOldJumpPressed: 1300n, // bool m_bOldJumpPressed; |  0x514 | Schema_Builtin | Size: 0x1
	m_flJumpPressedTime: 1304n, // float32 m_flJumpPressedTime; |  0x518 | Schema_Builtin | Size: 0x4
	m_fStashGrenadeParameterWhen: 1308n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nButtonDownMaskPrev: 1312n, // uint64_t m_nButtonDownMaskPrev; |  0x520 | Schema_Builtin | Size: 0x8
	m_flOffsetTickCompleteTime: 1320n, // float32 m_flOffsetTickCompleteTime; |  0x528 | Schema_Builtin | Size: 0x4
	m_flOffsetTickStashedSpeed: 1324n, // float32 m_flOffsetTickStashedSpeed; |  0x52c | Schema_Builtin | Size: 0x4
	m_flStamina: 1328n, // float32 m_flStamina; |  0x530 | Schema_Builtin | Size: 0x4
	m_flHeightAtJumpStart: 1332n, // float32 m_flHeightAtJumpStart; |  0x534 | Schema_Builtin | Size: 0x4
	m_flMaxJumpHeightThisJump: 1336n, // float32 m_flMaxJumpHeightThisJump; |  0x538 | Schema_Builtin | Size: 0x4
	m_flMaxJumpHeightLastJump: 1340n, // float32 m_flMaxJumpHeightLastJump; |  0x53c | Schema_Builtin | Size: 0x4
	m_flStaminaAtJumpStart: 1344n, // float32 m_flStaminaAtJumpStart; |  0x540 | Schema_Builtin | Size: 0x4
	m_flAccumulatedJumpError: 1348n, // float32 m_flAccumulatedJumpError; |  0x544 | Schema_Builtin | Size: 0x4
	m_flTicksSinceLastSurfingDetected: 1352n, // float32 m_flTicksSinceLastSurfingDetected; |  0x548 | Schema_Builtin | Size: 0x4
	m_bWasSurfing: 1356n, // bool m_bWasSurfing; |  0x54c | Schema_Builtin | Size: 0x1
	m_vecInputRotated: 1500n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bJumpApexPending: 3592n, // bool m_bJumpApexPending; |  0xe08 | Schema_Builtin | Size: 0x1
}
