#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "entity2_GameTime_t.hpp"

class client_CCSPlayer_WeaponServices {
    void **__vftable_0;
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_2012[0x18];
    char m_hMyWeapons[0x18];
    char m_hActiveWeapon[0x4];
    char m_hLastWeapon[0x4];
    uint16_t m_iAmmo[32];
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    void **__vftable_4;
    void **__vftable_5;
    entity2_GameTime_t m_flNextAttack;
    bool m_bIsLookingAtWeapon;
    bool m_bIsHoldingLookAtWeapon;
    char pad_1677[0x2];
    uint32_t m_nOldTotalShootPositionHistoryCount;
    char pad_1678[0x294];
    uint32_t m_nOldTotalInputHistoryCount;
    char pad_1679[0x1214];
    char m_networkAnimTiming[0x18];
    bool m_bBlockInspectUntilNextGraphUpdate;
    char end_pad_1680[0x2f];
};
