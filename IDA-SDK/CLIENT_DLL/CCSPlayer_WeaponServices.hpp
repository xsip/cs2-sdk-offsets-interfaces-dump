#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CNetworkVarChainer.hpp"
#include "GameTime_t.hpp"

class CCSPlayer_WeaponServices {
    char _vtable_pad_635[0x8];
    CNetworkVarChainer __m_pChainEntity;
    char pad_636[0x10];
    char m_hMyWeapons[0x18];
    char m_hActiveWeapon[0x4];
    char m_hLastWeapon[0x4];
    uint16_t m_iAmmo[32];
    char _vtable_pad_316[0x28];
    GameTime_t m_flNextAttack;
    bool m_bIsLookingAtWeapon;
    bool m_bIsHoldingLookAtWeapon;
    char pad_317[0x2];
    uint32_t m_nOldTotalShootPositionHistoryCount;
    char pad_318[0x294];
    uint32_t m_nOldTotalInputHistoryCount;
    char pad_319[0x155c];
    char m_networkAnimTiming[0x18];
    bool m_bBlockInspectUntilNextGraphUpdate;
    char end_pad_320[0x2f];
};
