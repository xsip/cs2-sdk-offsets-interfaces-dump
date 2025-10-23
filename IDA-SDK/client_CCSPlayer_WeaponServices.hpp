#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "entity2_GameTime_t.hpp"

class client_CCSPlayer_WeaponServices {
    char vTable1208[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1209[0x10];
    char m_hMyWeapons[0x18];
    char m_hActiveWeapon[0x4];
    char m_hLastWeapon[0x4];
    uint16_t m_iAmmo[32];
    char vTable879[0x28];
    entity2_GameTime_t m_flNextAttack;
    bool m_bIsLookingAtWeapon;
    bool m_bIsHoldingLookAtWeapon;
    char pad_880[0x2];
    uint32_t m_nOldTotalShootPositionHistoryCount;
    char pad_881[0x294];
    uint32_t m_nOldTotalInputHistoryCount;
    char pad_882[0x155c];
    char m_networkAnimTiming[0x18];
    bool m_bBlockInspectUntilNextGraphUpdate;
    char end_pad_883[0x2f];
};
