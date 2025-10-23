#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CNetworkOriginCellCoordQuantizedVector {
    char vTable1008[0x10];
    uint16_t m_cellX;
    uint16_t m_cellY;
    uint16_t m_cellZ;
    uint16_t m_nOutsideWorld;
    CNetworkedQuantizedFloat m_vecX;
    CNetworkedQuantizedFloat m_vecY;
    CNetworkedQuantizedFloat m_vecZ;
};
