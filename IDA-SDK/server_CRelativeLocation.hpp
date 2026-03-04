#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CRelativeLocation {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    server_RelativeLocationType_t m_Type;
    char pad_2855[0x3];
    Vector m_vRelativeOffset;
    VectorWS m_vWorldSpacePos;
    char m_hEntity[0x4];
};
