#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class CNetworkOriginCellCoordQuantizedVector {
    char _vtable_pad_434[0x10];
    uint16_t m_cellX;
    uint16_t m_cellY;
    uint16_t m_cellZ;
    uint16_t m_nOutsideWorld;
    CNetworkedQuantizedFloat m_vecX;
    CNetworkedQuantizedFloat m_vecY;
    CNetworkedQuantizedFloat m_vecZ;
};
