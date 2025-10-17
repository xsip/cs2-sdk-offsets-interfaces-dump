#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CAnimGraphNetworkSettings {
    char pad_32[0x20];
    bool m_bNetworkingEnabled;
    char end_pad_31[0x7];
};
