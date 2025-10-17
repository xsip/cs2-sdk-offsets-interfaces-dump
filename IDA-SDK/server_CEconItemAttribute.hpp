#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CEconItemAttribute {
    char vTable3481[0x30];
    uint16_t m_iAttributeDefinitionIndex;
    char pad_3482[0x2];
    float32 m_flValue;
    float32 m_flInitialValue;
    int32_t m_nRefundableCurrency;
    bool m_bSetBonus;
    char end_pad_3483[0x7];
};
