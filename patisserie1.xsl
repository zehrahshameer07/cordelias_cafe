<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
                version="1.0"
                xmlns:ns="http://www.cordeliascafe.com">
    <xsl:template match="/">
        <html>
            <head>
                <title>Cordelia's Café - Overview</title>
            </head>
            <body>
                <h1>Cordelia's Café</h1>
                
                <h2>Cakes</h2>
                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Weight</th>
                        <th>Available</th>
                    </tr>
                    <xsl:for-each select="ns:patisserie/ns:cakes/ns:cake">
                        <tr>
                            <td><xsl:value-of select="ns:name"/></td>
                            <td><xsl:value-of select="ns:price"/></td>
                            <td>
                                <xsl:value-of select="ns:weight"/>
                                (<xsl:value-of select="ns:weight/@unit"/>)
                            </td>
                            <td>
                                <xsl:choose>
                                    <xsl:when test="ns:isAvailable='true'">Yes</xsl:when>
                                    <xsl:otherwise>No</xsl:otherwise>
                                </xsl:choose>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>

                <h2>Orders</h2>
                <table border="1">
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Cake Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Status</th>
                    </tr>
                    <xsl:for-each select="ns:patisserie/ns:orders/ns:order">
                        <tr>
                            <td><xsl:value-of select="ns:orderId"/></td>
                            <td><xsl:value-of select="ns:customerName"/></td>
                            <td><xsl:value-of select="ns:cakeName"/></td>
                            <td><xsl:value-of select="ns:quantity"/></td>
                            <td><xsl:value-of select="ns:totalPrice"/></td>
                            <td><xsl:value-of select="ns:status"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

                <h2>Customers</h2>
                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                    <xsl:for-each select="ns:patisserie/ns:customers/ns:customer">
                        <tr>
                            <td><xsl:value-of select="ns:name"/></td>
                            <td><xsl:value-of select="ns:email"/></td>
                            <td><xsl:value-of select="ns:phone"/></td>
                            <td><xsl:value-of select="ns:address"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
