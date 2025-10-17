#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CPropDataComponent {
    char pad_770[0x8];
    char vTable1214[0x8];
    float32 m_flDmgModBullet;
    float32 m_flDmgModClub;
    float32 m_flDmgModExplosive;
    float32 m_flDmgModFire;
    CUtlSymbolLarge m_iszPhysicsDamageTableName;
    CUtlSymbolLarge m_iszBasePropData;
    int32_t m_nInteractions;
    bool m_bSpawnMotionDisabled;
    char pad_1215[0x3];
    int32_t m_nDisableTakePhysicsDamageSpawnFlag;
    int32_t m_nMotionDisabledSpawnFlag;
};
