#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_SellbackPurchaseEntry_t {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    void **__vftable_4;
    void **__vftable_5;
    uint16_t m_unDefIdx;
    char pad_2986[0x2];
    int32_t m_nCost;
    int32_t m_nPrevArmor;
    bool m_bPrevHelmet;
    char pad_2987[0x3];
    CEntityHandle m_hItem;
    char end_pad_2988[0x4];
};
