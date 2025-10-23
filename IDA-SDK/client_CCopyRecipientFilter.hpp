#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CCopyRecipientFilter {
    char vTable1102[0x8];
    int32_t m_Flags;
    char pad_1103[0x4];
    char m_Recipients[0x18];
    char pad_1104[0x8];
};
