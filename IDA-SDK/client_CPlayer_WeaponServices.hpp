#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class client_CPlayer_WeaponServices {
    char vTable1197[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1198[0x10];
    char m_hMyWeapons[0x18];
    char m_hActiveWeapon[0x4];
    char m_hLastWeapon[0x4];
    uint16_t m_iAmmo[32];
};
