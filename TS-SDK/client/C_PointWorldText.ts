// generated - do not edit!

import {client_C_ModelPointEntity} from './C_ModelPointEntity';
// Class size: 0x1180
// BaseClass: : public CS2::client::C_ModelPointEntity
export const client_C_PointWorldText  = {
	...client_C_ModelPointEntity,
	m_bForceRecreateNextUpdate: 3768n, // bool m_bForceRecreateNextUpdate; |  0xeb8 | Schema_Builtin | Size: 0x1
	m_messageText: 3792n, // char m_messageText[512]; |  0xed0 | Schema_FixedArray | Size: 0x200
	m_FontName: 4304n, // char m_FontName[64]; |  0x10d0 | Schema_FixedArray | Size: 0x40
	m_BackgroundMaterialName: 4368n, // char m_BackgroundMaterialName[64]; |  0x1110 | Schema_FixedArray | Size: 0x40
	m_bEnabled: 4432n, // bool m_bEnabled; |  0x1150 | Schema_Builtin | Size: 0x1
	m_bFullbright: 4433n, // bool m_bFullbright; |  0x1151 | Schema_Builtin | Size: 0x1
	m_flWorldUnitsPerPx: 4436n, // float32 m_flWorldUnitsPerPx; |  0x1154 | Schema_Builtin | Size: 0x4
	m_flFontSize: 4440n, // float32 m_flFontSize; |  0x1158 | Schema_Builtin | Size: 0x4
	m_flDepthOffset: 4444n, // float32 m_flDepthOffset; |  0x115c | Schema_Builtin | Size: 0x4
	m_bDrawBackground: 4448n, // bool m_bDrawBackground; |  0x1160 | Schema_Builtin | Size: 0x1
	m_flBackgroundBorderWidth: 4452n, // float32 m_flBackgroundBorderWidth; |  0x1164 | Schema_Builtin | Size: 0x4
	m_flBackgroundBorderHeight: 4456n, // float32 m_flBackgroundBorderHeight; |  0x1168 | Schema_Builtin | Size: 0x4
	m_flBackgroundWorldToUV: 4460n, // float32 m_flBackgroundWorldToUV; |  0x116c | Schema_Builtin | Size: 0x4
	m_Color: 4464n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_nJustifyHorizontal: 4468n, // client::PointWorldTextJustifyHorizontal_t  | Schema_DeclaredEnum | Size: 0x4
	m_nJustifyVertical: 4472n, // client::PointWorldTextJustifyVertical_t  | Schema_DeclaredEnum | Size: 0x4
	m_nReorientMode: 4476n, // client::PointWorldTextReorientMode_t  | Schema_DeclaredEnum | Size: 0x4
}
