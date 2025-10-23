#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CRelativeLocation {
    char vTable2756[0x18];
    server_RelativeLocationType_t m_Type;
    char pad_2757[0x3];
    Vector m_vRelativeOffset;
    VectorWS m_vWorldSpacePos;
    char m_hEntity[0x4];
};
