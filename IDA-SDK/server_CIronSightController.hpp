#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CIronSightController {
    char vTable2828[0x8];
    bool m_bIronSightAvailable;
    char pad_2829[0x3];
    float32 m_flIronSightAmount;
    float32 m_flIronSightAmountGained;
    float32 m_flIronSightAmountBiased;
};
